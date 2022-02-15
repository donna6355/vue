import React, { useState } from "react";
import { useDispatch } from "react-redux";

function LoginPage() {
  const dispatch = useDispatch();
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");
  const onEmailChange = (evt) => {
    setEmail(evt.currentTarget.text);
  };
  const onPwChange = (evt) => {
    setPassword(evt.currentTarget.text);
  };
  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    let body = {
      email: email,
      password: password,
    };
    dispatch(loginUser(body));
  };
  return (
    <div>
      <form className="column" onSubmit={onSubmitHandler}>
        <label for="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={onEmailChange}
        ></input>
        <label style={{ marginTop: 20 }} for="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onPwChange}
        ></input>
        <button style={{ marginTop: 20 }} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
