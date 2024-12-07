import React from "react";
import "./Login.css";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  return (
    <>
      <Header />
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />

          <div className="remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-redirect">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
        <p className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Login;