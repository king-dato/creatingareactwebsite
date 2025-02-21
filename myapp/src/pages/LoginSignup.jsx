import { useState } from "react";

import { useNavigate } from "react-router-dom";
import user_icon from "../components/Assets/person.png";
import email_icon from "../components/Assets/email.png";
import password_icon from "../components/Assets/password.png";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action !== "Login" && (
          <div className="input">
            <img src={user_icon} alt="User Icon" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input type="password" placeholder="Password" />
        </div>
        {action === "Login" && (
          <div className="forgot-password">
            Lost Password? <span>Click here</span>
          </div>
        )}
      </div>

      <div className="submit-container">
        <button
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </button>
        <button
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => navigate("login2")}
        >
          Log In
        </button>
      </div>
    </div>
  );
};
export default LoginSignup;
