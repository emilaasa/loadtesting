import { sleep } from "k6";
import http from "k6/http";

export const options = {
  discardResponseBodies: true,
  noVUConnectionReuse: true,
  insecureSkipTLSVerify: true,
  stages: [
    { duration: "1m", target: 500 }, // get a baseline
    { duration: "3m", target: 5000 }, // peak rps
    { duration: "1m", target: 0 } // recovery
  ],
  ext: {
    loadimpact: {
      distribution: {
        loadZone1: { loadZone: "amazon:ie:dublin", percent: 34 },
        loadZone2: { loadZone: "amazon:gb:london", percent: 33 },
        loadZone3: { loadZone: "amazon:de:frankfurt", percent: 33 }
      }
    }
  }
};

const baseURL = `${__ENV.TARGET}`;
const hash = `${__ENV.HASH}`;
export default function() {
  let res = http.get(`${baseURL}/`);

  // Fetch static assets in parallell like a browser would
  http.batch([
    ["GET", `${baseURL}/css/site.${hash}.css`],
    ["GET", `${baseURL}/folkhalsomyndigheten.png`],
    ["GET", `${baseURL}/msb.png`],
    ["GET", `${baseURL}/favicon.ico`],
    ["GET", `${baseURL}/js/1.site.${hash}.bundle.js`],
    ["GET", `${baseURL}/js/site.${hash}.bundle.js`],
    ["GET", `${baseURL}/socialstyrelsen.png`]
  ]);

  sleep(1);
}
