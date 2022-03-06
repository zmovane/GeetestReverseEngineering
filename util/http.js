const axios = require("axios");

const DEFAULT_REQUEST_CONFIG = {
  timeout: 20000,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
  },
};

const client = axios.create(DEFAULT_REQUEST_CONFIG);
async function request(method, url, data, headers) {
  client.interceptors.request.use((config) => {
    for (const [k, v] of Object.entries(headers)) {
      config.headers[k] = v;
    }
    return config;
  });
  const requestConf = {
    method: method.toLowerCase(),
    url: url,
  };
  switch (requestConf.method) {
    case "get":
    case "delete":
      requestConf.params = data;
      break;
    case "post":
      requestConf.data = data;
      break;
  }
  return await client.request(requestConf);
}
module.exports = { request };
