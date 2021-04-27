import axios from "axios";

export function requestGetOrder() {
  return axios.request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: "get",
    url: "/api/orders"
  });
}