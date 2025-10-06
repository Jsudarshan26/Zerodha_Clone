import React from "react";
import Menu from "./Menu";

const TopBar = ({ user, onLogout }) => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      {/* User Info Section */}
      {user && (
        <div className="user-info-section">
          <div className="user-welcome">
            <span className="welcome-text">Welcome, </span>
            <span className="user-name">{user.name}</span>
          </div>
          <button onClick={onLogout} className="logout-btn">
            Logout
          </button>
        </div>
      )}

      <Menu />
    </div>
  );
};

export default TopBar;