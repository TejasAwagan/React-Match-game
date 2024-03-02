import React, { useState } from "react";
// import Background from "./images/bg.png";
import monkey from "./images/monkey.png";

const LoginPage = ({ onLogin }) => {
  const [usernameLocal, setUsernameLocal] = useState("");
  const handleLogin = () => {
    if (usernameLocal.length > 0) {
      onLogin(usernameLocal);
    } else {
      alert("Please enter a username");
    }
  };

  return (
    <div className="page-container">
<img src={monkey} alt="Monkey" className="monkey" />

      <h1>Login</h1>
      <input
      className="input"
        type="text"
        placeholder="Enter username"
        value={usernameLocal}
        onChange={(e) => {
          setUsernameLocal(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleLogin();
        }}
        className="btn"
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
