import axios from "axios";

export function loginUser(dataToSubmit) {
  const request = axios
    .post("/api/login", dataToSubmit)
    .then((res) => res.data);
  return {
    type: "LOGIN_USER",
    payload: request,
  };
}
