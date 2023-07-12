import Lock from "@material-ui/icons/Lock";
import React, { useState } from "react";
import loginimg from "../../assets/login-side-img.svg";
import logo from "../../assets/logo.png";
import axios from "axios"
import { useHistory } from "react-router-dom";
import "./style.scss";
import { Person } from "@material-ui/icons";

const Login = ({ setLoginUser }) => {
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:8000/api/login/", user).then((res) => {
      let access = res.data.access
      alert(access);
      // alert(res.data.access);

      // setLoginUser(res.data.user);
      // history.push("/");
    }).catch((res) => {
      // console.log(res.data);
      // alert(res.detail)

    });
  };

  return (
    <div className="login">
      <div className="image">
        <img src={loginimg} alt="" />
      </div>
      <div className="login-page">
        <img src={logo} alt="logo" className="logo" />
        <h1>Login</h1>
        <div className="login-input">
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Enter your username"
          ></input>
          <Person className="icon" />
        </div>

        <div className="login-input">
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your Password"
          ></input>
          <Lock className="icon" />
        </div>

        <div className="btn" onClick={login}>
          Login
        </div>
        <div>or</div>
        <div className="btn" onClick={() => history.push("/register")}>
          Register
        </div>
      </div>
    </div>
  );
};

export default Login;
