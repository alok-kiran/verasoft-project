import axios from "axios";

export function requestGetHeader(): any {
  return axios.request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: "get",
    url: "/api/headers"
  });
}