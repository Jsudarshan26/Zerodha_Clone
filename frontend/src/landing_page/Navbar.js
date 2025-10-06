import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch("https://zerodha-clone-backend.onrender.com/api/auth/check", {
        credentials: "include",
      });
      const data = await response.json();
      if (data.authenticated) {
        setUser(data.user);
      }
    } catch (error) {
      console.error("Auth check error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("https://zerodha-clone-backend.onrender.com/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
      navigate("/");
      window.location.reload(); // Refresh to update UI
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleDashboard = () => {
    window.location.href = "https://zerodha-clone-dashboard.onrender.com";
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2 px-lg-5">
        <div className="d-flex justify-content-between w-100 align-items-center">
          <Link className="navbar-brand" to="/">
            <img src="media/logo.svg" style={{ width: "25%" }} alt="logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {/* Show different links based on authentication status */}
            {!loading && (
              <>
                {user ? (
                  // User is logged in - show dashboard and logout
                  <>
                    <li className="nav-item mx-2">
                      <button 
                        className="nav-link btn btn-link text-decoration-none p-0"
                        onClick={handleDashboard}
                        style={{ border: 'none', background: 'none', color: '#387ed1' }}
                      >
                        Dashboard
                      </button>
                    </li>
                    <li className="nav-item mx-2">
                      <span className="nav-link text-dark">
                        Welcome, {user.name}
                      </span>
                    </li>
                    <li className="nav-item mx-2">
                      <button 
                        className="btn btn-outline-danger btn-sm"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  // User is not logged in - show signup and login
                  <>
                    <li className="nav-item mx-2">
                      <Link className="nav-link" to="/signup">
                        Signup
                      </Link>
                    </li>
                    <li className="nav-item mx-2">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                  </>
                )}
                
                {/* Common links for all users */}
                <li className="nav-item mx-2">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item mx-2">
                  <Link className="nav-link" to="/product">
                    Products
                  </Link>
                </li>

                <li className="nav-item mx-2">
                  <Link className="nav-link" to="/pricing">
                    Pricing
                  </Link>
                </li>

                <li className="nav-item mx-2">
                  <Link className="nav-link" to="/support">
                    Support
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;