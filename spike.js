import { sleep } from "k6";
import http from "k6/http";

export const options = {
  discardResponseBodies: true,
  noVUConnectionReuse: true,
  stages: [
    { duration: "1m", target: 250 }, // get a baseline
    { duration: "30s", target: 2500 }, // ramp up
    { duration: "30s", target: 5000 },
    { duration: "30s", target: 12500 },
    { duration: "1m", target: 25000 }, // peak rps
    { duration: "30s", target: 12500 },
    { duration: "5m", target: 250 } // recovery
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

const baseURL = "https://REDACTED_SE/";

export default function() {
  let res = http.get(`${baseURL}/`);

  // Fetch static assets in parallell like a browser would
  http.batch([
    ["GET", `${baseURL}/css/site.210aebbe3032cbd1dba7.css`],
    ["GET", `${baseURL}/1.png`],
    ["GET", `${baseURL}/2.png`],
    ["GET", `${baseURL}/js/1.site.210aebbe3032cbd1dba7.bundle.js`],
    ["GET", `${baseURL}/js/site.210aebbe3032cbd1dba7.bundle.js`],
    ["GET", `${baseURL}/3.png`]
  ]);

  sleep(1);
}
