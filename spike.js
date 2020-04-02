import http from "k6/http";
import { sleep } from "k6";

export default function() {
  let stages = [
    { duration: "1m", target: 1000 }, // get a baseline
    { duration: "30s", target: 10000 }, // ramp up
    { duration: "30s", target: 20000 },
    { duration: "30s", target: 50000 },
    { duration: "1m", target: 100000 }, // peak rps
    { duration: "30s", target: 50000 },
    { duration: "5m", target: 1000 } // recovery
  ];

  let url = "https://TODO";

  let res = http.get(url);

  // TODO check something cheap?
  check(res, {
    "response code was 200": res => res.status == 200
  });
}
