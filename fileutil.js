import { DateTime } from "https://js.sabae.cc/DateTime.js";
import { LIMIT_SIZE_LOG_A_MONTH } from "./settings.js";

export const makeDirectory = async (dir) => {
  await Deno.mkdir(dir, { recursive: true });
};

export const makeDirectories = async (dirs) => {
  for (const dir of dirs) {
    await makeDirectory(dir);
  }
};

export const readJSON = async (fn) => {
  try {
    return JSON.parse(await Deno.readTextFile(fn));
  } catch (e) {
    return null;
  }
};

export const writeJSON = async (fn, json) => {
  try {
    await Deno.writeTextFile(fn, JSON.stringify(json, null, 2));
  } catch (e) {
    console.log(e);
  }
};

export const sanitizeName = (s) => {
  return encodeURIComponent(s);
};

export const existsFile = async (fn) => {
  try {
    await Deno.stat(fn);
    return true;
  } catch (e) {
    return false;
  }
};

export const getSizeFile = async (fn) => {
  try {
    return (await Deno.stat(fn)).size;
  } catch (e) {
    return 0;
  }
};

export const checkAccess = async (connio, path) => {
  const fn = sanitizeName(connio.remoteAddr.hostname) + ".log";
  if (await existsFile("blacklist/" + fn) && !await existsFile("whitelist/" + fn)) {
    return false;
  }
  const dt = new DateTime();
  const txt = dt.toString() + "\t" + path + "\n";
  const ym = dt.day.toStringYM();
  const logpath = "log/" + ym + "/";
  await makeDirectory(logpath);
  await Deno.writeTextFile(logpath + fn, txt, { append: true });
  const size = await getSizeFile(logpath + fn);
  if (size > LIMIT_SIZE_LOG_A_MONTH) {
    await Deno.writeTextFile("blacklist/" + fn, txt);
    return false;
  }
  return true;
};
