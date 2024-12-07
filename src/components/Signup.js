import React from "react";
import "./Signup.css";
import Header from "./Header";
import Footer from "./Footer";

const Signup = () => {
  return (
    <>
      <Header />
      <div className="signup-container">
        <div className="signup-table">
          <h1 className="signup-title">SIGN UP</h1>
          <form className="signup-form">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />

            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              required
            />

            <label htmlFor="gender">Gender Identity</label>
            <select id="gender" name="gender" required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-Binary</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              required
            />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your password"
              required
            />

            <label htmlFor="emergency-name">Emergency Contact Name</label>
            <input
              type="text"
              id="emergency-name"
              name="emergency-name"
              placeholder="Enter emergency contact's name"
              required
            />

            <label htmlFor="emergency-phone">Emergency Contact Phone</label>
            <input
              type="tel"
              id="emergency-phone"
              name="emergency-phone"
              placeholder="Enter emergency contact's phone number"
              required
            />

            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
          <p className="login-redirect">
            Already have an account? <a href="/Login">Login</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;