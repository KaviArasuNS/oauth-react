import React from "react";

const Google =
  "https://raw.githubusercontent.com/safak/youtube/react-social-login/client/src/img/google.png";
const Facebook =
  "https://raw.githubusercontent.com/safak/youtube/react-social-login/client/src/img/facebook.png";
const Github =
  "https://raw.githubusercontent.com/safak/youtube/react-social-login/client/src/img/github.png";

const Login = () => {
  const BASE_URL = "https://oauth-social.herokuapp.com";

  const google = () => {
    window.open(`${BASE_URL}/auth/google`, "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebok", "_self");
  };
  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
