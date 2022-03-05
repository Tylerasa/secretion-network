import React from "react";
import "./styles.css";
const Login = () => {
  const handleSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();
  };
  return (
    <div className="login-wrapper">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input placeholder="username" type="text" />
        <br />
        <input placeholder="password" type="password" />
        <br />
        <button>Click</button>
      </form>
    </div>
  );
};

export default Login;
