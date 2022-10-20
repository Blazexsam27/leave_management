import React from "react";
import "../styles/Auth/SignIn.css";
import signin from "../../assets/images/sign_in.png";

export default function SignIn() {
  return (
    <div className="signin-container">
      <div className="header">
        <p>
          LEAVE <span>MANAGEMENT</span>
        </p>
      </div>
      <div className="auth-form-container">
        <p className="header">Sign In</p>
        <form className="signin-form">
          <img className="signin-image" src={signin} alt="Sign In Image" />
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
          <button className="submit-button">Sign In</button>
        </form>
      </div>
    </div>
  );
}
