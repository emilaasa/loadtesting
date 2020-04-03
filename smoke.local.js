import { sleep } from "k6";
import http from "k6/http";

export const options = {
  discardResponseBodies: true,
  insecureSkipTLSVerify: true,
  noVUConnectionReuse: true,
  stages: [
    { duration: "30s", target: 10 } // get a baseline
    // { duration: "30s", target: 2500 }, // ramp up
    // { duration: "30s", target: 5000 },
    // { duration: "30s", target: 12500 },
    // { duration: "1m", target: 25000 }, // peak rps
    // { duration: "30s", target: 12500 },
    // { duration: "5m", target: 250 } // recovery
  ]
  // ext: {
  //   loadimpact: {
  //     distribution: {
  //       loadZone1: { loadZone: "amazon:ie:dublin", percent: 34 },
  //       loadZone2: { loadZone: "amazon:gb:london", percent: 33 },
  //       loadZone3: { loadZone: "amazon:de:frankfurt", percent: 33 }
  //     }
  //   }
  // }
};

const baseURL = `${__ENV.TARGET}`
const hash = `${__ENV.HASH}`

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

