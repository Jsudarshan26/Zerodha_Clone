import React from "react";

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful! Redirecting to dashboard...");
        // Redirect to dashboard
        window.location.href = "https://zerodha-clone-dashboard-krkg.onrender.com";
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    
      <h1>SignUp</h1>
 
      
    </>
  );
}

export default SignUp;
