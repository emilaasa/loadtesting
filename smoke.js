import http from "k6/http";
import { sleep } from "k6";

export default function() {
  const stages = [{ duration: "10m", target: 1000 }];

  const url = "https://TODO";

  const res = http.get(url);

  check(res, {
    "response code was 200": res => res.status == 200
    // TODO check something more expensive? Not sure we should parse html
    // here tho that seems out of scope
  });
  sleep(1);
}
