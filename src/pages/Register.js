import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "../Register.css";

export function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [, setAccesToken] = useLocalStorage("accessToken");
  const [errorMsg, setErrorMsg] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  async function handleRegister(event) {
    event.preventDefault();

    const newUser = {
      email: email,
      password: password,
    };

    const res = await fetch("http://localhost:3050/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (res.status === 201) {
      const resMessage = await res.json();
      setAccesToken(resMessage.accessToken);
      setEmail("");
      setPassword("");
      setErrorMsg("");
    } else {
      setErrorMsg("Error");
    }
  }

  return (
    <div className="register-box">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
