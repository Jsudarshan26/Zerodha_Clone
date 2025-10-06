import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const response = await fetch('https://zerodha-clone-ufoh.onrender.com/api/auth/profile', {
        credentials: 'include', // This will send cookies
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        // If not authenticated, redirect to login
        window.location.href = "https://zerodha-clone-frontend-yb92.onrender.com/login";
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      window.location.href = "https://zerodha-clone-frontend-yb92.onrender.com/login";
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('https://zerodha-clone-ufoh.onrender.com/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      window.location.href = "https://zerodha-clone-frontend-yb92.onrender.com";
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <>
      <TopBar user={user} onLogout={handleLogout} />
      <Dashboard user={user} />
    </>
  );
};

export default Home;