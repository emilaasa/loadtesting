// Creator: k6 Browser Recorder 0.1.3

import { sleep, group } from "k6";
import http from "k6/http";

export const options = { vus: 10, duration: "5m" };

export default function() {
  let response;

  group("page_0 - https://REDACTED_SE/", function() {
    response = http.get("https://REDACTED_SE/", {
      headers: {
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
        "Sec-Fetch-Dest": "document",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
      }
    });
    response = http.get(
      "https://REDACTED_SE/css/site.210aebbe3032cbd1dba7.css",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
          "Sec-Fetch-Dest": "style",
          Accept: "text/css,*/*;q=0.1"
        }
      }
    );
    response = http.get("https://REDACTED_SE/msb.png", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
        "Sec-Fetch-Dest": "image",
        Accept: "image/webp,image/apng,image/*,*/*;q=0.8"
      }
    });
    response = http.get(
      "https://REDACTED_SE/folkhalsomyndigheten.png",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
          "Sec-Fetch-Dest": "image",
          Accept: "image/webp,image/apng,image/*,*/*;q=0.8"
        }
      }
    );
    response = http.get(
      "https://REDACTED_SE/js/1.site.210aebbe3032cbd1dba7.bundle.js",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
          "Sec-Fetch-Dest": "script",
          Accept: "*/*"
        }
      }
    );
    response = http.get(
      "https://REDACTED_SE/js/site.210aebbe3032cbd1dba7.bundle.js",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
          "Sec-Fetch-Dest": "script",
          Accept: "*/*"
        }
      }
    );
    response = http.get("https://REDACTED_SE/socialstyrelsen.png", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
        "Sec-Fetch-Dest": "image",
        Accept: "image/webp,image/apng,image/*,*/*;q=0.8"
      }
    });
  });

  sleep(1);
}
