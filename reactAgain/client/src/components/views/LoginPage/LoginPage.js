import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

function LoginPage(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  };
  const onPwChange = (evt) => {
    setPassword(evt.target.value);
  };
  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    let body = {
      email: email,
      password: password,
    };
    dispatch(loginUser(body)).then((res) => {
      if (res.payload.loginSuccess) {
        navigate("/");
        // props.history.push("/");
      } else {
        alert("Error");
      }
    });
  };
  return (
    <div>
      <form className="column" onSubmit={onSubmitHandler}>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={onEmailChange}
        ></input>
        <label htmlFor="password" style={{ marginTop: 20 }}>
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
