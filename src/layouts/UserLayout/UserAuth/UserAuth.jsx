import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Ensure you have axios installed

import './UserAuth.scss'

function UserAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("")
  const navigate = useNavigate();
  const [formType, setFormType] = useState("login");
  const [isLoading, setIsLoading] = useState(false);

  const BackedUrl = import.meta.env.VITE_BACKEND_URL;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (formType === "signup") {
      await handleSignup();
    } else {
      await handleLogin();
    }
    setIsLoading(false);
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${BackedUrl}/user/signup`, { email, password, name:username });
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BackedUrl}/user/login`, { email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleSignupClick = () => {
    setFormType("signup");
  };

  const handleLoginClick = () => {
    setFormType("login");
  };

  const handleSignupLinkClick = (e) => {
    e.preventDefault();
    handleSignupClick();
  };

  return (
    <div className={`allinloginsignup ${isLoading ? "faded-content" : ""}`}>
      <div className="loginonform">
        <div className="wrapper">
          <div className="title-text">
            <div className={`title ${formType === "login" ? "login" : "signup"}`}>
              {formType === "login" ? "Login Form" : "Signup Form"}
            </div>
          </div>
          <div className="form-container">
            <div className="slide-controls">
              <input
                type="radio"
                name="slide"
                id="login"
                checked={formType === "login"}
                onChange={handleLoginClick}
              />
              <input
                type="radio"
                name="slide"
                id="signup"
                checked={formType === "signup"}
                onChange={handleSignupClick}
              />
              <label
                htmlFor="login"
                className="slide login"
                onClick={handleLoginClick}
              >
                Login
              </label>
              <label
                htmlFor="signup"
                className="slide signup"
                onClick={handleSignupClick}
              >
                Signup
              </label>
              <div className="slider-tab"></div>
            </div>
          
            <div className="form-inner">
              <form onSubmit={handleFormSubmit}>
              <div className="field">
                  <input
                    type="text"
                    placeholder="Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {formType === "signup" && (
                  <div className="field">
                    <input
                      type="password"
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                )}
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input
                    type="submit"
                    value={formType === "login" ? "Login" : "Signup"}
                  />
                </div>
                {formType === "login" && (
                  <div className="pass-link">
                    <a href="/">Forgot password?</a>
                  </div>
                )}
                <div className="signup-link">
                  {formType === "login" ? (
                    <span>
                      Not a member?{" "}
                      <a href="/" onClick={handleSignupLinkClick}>
                        Signup now
                      </a>
                    </span>
                  ) : (
                    <span>
                      Already have an account?{" "}
                      <a href="/" onClick={handleLoginClick}>
                        Login
                      </a>
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAuth;
