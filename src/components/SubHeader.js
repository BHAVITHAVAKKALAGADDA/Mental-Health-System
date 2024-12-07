import React from 'react';
import './SubHeader.css'; // Import Subheader-specific styles

const Subheader = () => {
  return (
    <div className="subheader">
      <div className="subheader-logo">
        <a href="/" className="subheader-logo-link">
          <span className="subheader-title">MINDFUL</span> <span className="subheader-title">MOVES</span>
        </a>
      </div>
      <nav className="nav-menu">
        <ul>
          <li className="dropdown">
            <button className="dropdown-button">About us</button>
            <div className="dropdown-content">
              <a href="/assessment-1">Assessment 1</a>
              <a href="/assessment-2">Assessment 2</a>
              <a href="/assessment-3">Assessment 3</a>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropdown-button">Mental Health Assessment</button>
            <div className="dropdown-content">
              <a href="/assessment-1">Assessment 1</a>
              <a href="/assessment-2">Assessment 2</a>
              <a href="/assessment-3">Assessment 3</a>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropdown-button">Resource Center</button>
            <div className="dropdown-content">
              <a href="/resource-1">Resource 1</a>
              <a href="/resource-2">Resource 2</a>
              <a href="/resource-3">Resource 3</a>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropdown-button">Community Forum</button>
            <div className="dropdown-content">
              <a href="/forum-1">Forum 1</a>
              <a href="/forum-2">Forum 2</a>
              <a href="/forum-3">Forum 3</a>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropdown-button">Journaling</button>
            <div className="dropdown-content">
              <a href="/journaling-1">Journaling 1</a>
              <a href="/journaling-2">Journaling 2</a>
              <a href="/journaling-3">Journaling 3</a>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropdown-button">Mindfulness & Meditation</button>
            <div className="dropdown-content">
              <a href="/meditation-1">Meditation 1</a>
              <a href="/meditation-2">Meditation 2</a>
              <a href="/meditation-3">Meditation 3</a>
            </div>
          </li>
        </ul>
      </nav>
      <div className="right-corner">
        <a href="/Signup" className="login-signup-btn">Login/Signup</a>
        <a href="/Profile">Profile</a>
      </div>
    </div>
  );
};

export default Subheader;
