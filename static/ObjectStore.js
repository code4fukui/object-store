import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";

const OS_ENDPOINT = "./api/";

export class ObjectStore {
  constructor(fn) {
    this.fn = fn;
  }
  async set(name, json) {
    return await fetchJSON(OS_ENDPOINT + "set/" + this.fn + "/" + name, json);
  }
  async get(name = "") {
    return await fetchJSON(OS_ENDPOINT + "get/" + this.fn + "/" + name) || {};
  }
}
