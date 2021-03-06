import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {

    const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      username,
      password
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BE}/users/register`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        localStorage.setItem("my_user_token", response.data.token);
        navigate("/home");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="login-wrapper">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          type="text"
        />
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />
        <br />
        <button>register</button>
        <a href="/" className="create-account">
          already have an account
        </a>
      </form>
    </div>
  );
};

export default SignUp;
