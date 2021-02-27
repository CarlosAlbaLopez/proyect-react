import React, { useContext, useState } from "react";
import "../Register.css";
import { Redirect } from "react-router-dom";
import { TokenContext } from "../App";

export function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useContext(TokenContext);
  const [errorMsg, setErrorMsg] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  async function handleLogin(event) {
    event.preventDefault();

    const newUser = {
      email: email,
      password: password,
    };

    const res = await fetch("http://localhost:3050/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (res.status === 200) {
      const resMessage = await res.json();
      setToken(resMessage.accessToken);
      setEmail("");
      setPassword("");
      setErrorMsg("");
    } else {
      setErrorMsg("Error");
    }
  }

  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <div className="register-box">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="user-box">
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmail}
          ></input>
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          ></input>
          <label>Password</label>
        </div>
        {errorMsg && <div style={{ color: "red" }}>{errorMsg}</div>}
        <input
          type="submit"
          name="submitRegistration"
          className="submitRegistration"
        ></input>
      </form>
    </div>
  );
}
