import React from "react";
import "../styles/Auth/SignUp.css";
import signup from "../../assets/images/sign_up.png";

export default function SignUp() {
  return (
    <div className="signup-container">
      <div className="header">
        <p>
          LEAVE <span>MANAGEMENT</span>
        </p>
      </div>
      <div className="auth-form-container">
        <p className="header">Sign Un</p>
        <form className="signup-form">
          <img className="signup-image" src={signup} alt="Sign Up Image" />
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete="off"
            required
          />

          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            required
          />
          <button className="submit-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
