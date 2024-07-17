import React, { useState } from "react";
import axios from "axios";

function Login({ changeView }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleClickName = (e) => {
    setName(e.target.value);
  };
  const handleClickPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClickLogin = () => {
    axios
      .post("http://localhost:8080/admin/login", { name, password })
      .then((res) => {
        changeView("AllClubs");
      })
      .catch((err) => {
        console.error(err);
        alert("User or Password Are incorrect");
      });
  };

  return (
    <div className="login">
      userName:
      <input className="login__input" onChange={handleClickName} />
      Password:
      <input
        className="login__input"
        onChange={handleClickPassword}
        type="password"
      />
      <button className="login__btn" onClick={handleClickLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
