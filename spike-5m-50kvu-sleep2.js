import { sleep } from "k6";
import http from "k6/http";

export const options = {
  discardResponseBodies: true,
  noVUConnectionReuse: true,
  insecureSkipTLSVerify: true,
  stages: [
    { duration: "5m", target: 25000 }, // peak vu
    { duration: "5m", target: 50000 }, // peak vu
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

const baseURL = `${__ENV.TARGET}`

export default function() {
  let res = http.get(`${baseURL}/`);

  // Fetch static assets in parallell like a browser would
  try {
    http.batch([
      ["GET", `${baseURL}/css/site.4713dd1d06b9379dc472.css`],
      ["GET", `${baseURL}/js/1.site.4713dd1d06b9379dc472.bundle.js`],
      ["GET", `${baseURL}/js/site.4713dd1d06b9379dc472.bundle.js`],
      ["GET", `${baseURL}/favicon.ico`],
      ["GET", `${baseURL}/folkhalsomyndigheten.png`],
      ["GET", `${baseURL}/msb.png`],
      ["GET", `${baseURL}/socialstyrelsen.png`]
    ]);
  } catch (err) {
  	console.warn(err);
  }

  sleep(2);
}
