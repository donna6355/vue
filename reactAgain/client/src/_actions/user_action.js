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

export function registerUser(dataToSubmit) {
  const request = axios
    .post("/api/register", dataToSubmit)
    .then((res) => res.data);
  return {
    type: "REGISTER_USER",
    payload: request,
  };
}
export function auth() {
  const request = axios.get("/api/auth").then((res) => res.data);
  return {
    type: "AUTH_USER",
    payload: request,
  };
}
