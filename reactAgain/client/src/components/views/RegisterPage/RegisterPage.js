import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";

function RegisterPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [userName, setUserName] = useState("");
  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  };
  const onPwChange = (evt) => {
    setPassword(evt.target.value);
  };
  const onuserNameChange = (evt) => {
    setUserName(evt.target.value);
  };
  const onPwCheckChange = (evt) => {
    setPasswordCheck(evt.target.value);
  };
  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    if (password !== passwordCheck) return alert("Password does NOT match!");
    let body = {
      email: email,
      password: password,
      name: userName,
    };
    dispatch(registerUser(body)).then((res) => {
      if (res.payload) {
        // navigate("/");
        console.log("register success!");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div>
      <h2 style={{ marginTop: "100px", textAlign: "center" }}>SIGN UP</h2>
      <form className="column" onSubmit={onSubmitHandler}>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={onEmailChange}
        ></input>
        <label htmlFor="userName" style={{ marginTop: 20 }}>
          Name
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={userName}
          onChange={onuserNameChange}
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
        <label htmlFor="passwordCheck" style={{ marginTop: 20 }}>
          Confirm Password
        </label>
        <input
          type="password"
          id="passwordCheck"
          name="passwordCheck"
          value={passwordCheck}
          onChange={onPwCheckChange}
        ></input>
        <button style={{ marginTop: 20 }} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
