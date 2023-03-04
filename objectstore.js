import { serveAPI } from "https://js.sabae.cc/wsutil.js";
import { makeDirectories, readJSON, writeJSON, sanitizeName, checkAccess } from "./fileutil.js";

await makeDirectories(["log", "static", "blacklist", "whitelist"]);

serveAPI("/api/", async (param, req, path, connio) => {
  if (!await checkAccess(connio, path)) {
    return false;
  }
  const ss = path.split("/");
  const fn = "data/" + sanitizeName(ss[3]) + ".json";
  const name = ss[4];
  if (path.startsWith("/api/get/")) {
    const list = await readJSON(fn);
    if (!name) {
      return list;
    }
    return list ? list[name] : null;
  } else if (path.startsWith("/api/set/")) {
    const list = await readJSON(fn) || {};
    list[name] = param;
    await writeJSON(fn, list);
    return true;
  }
  return true;
});
