import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [loading, setLoading] = useState(false); // State to manage loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
      setLoading(false); // Set loading to false after success
      window.location.href = "/profile"; // Redirect after setting loading to false
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
      });
      setLoading(false); // Set loading to false after failure
    }
  };

  return (
    <div className="login-page">
          <form onSubmit={handleSubmit}>
      <h3>Sign in to your account</h3>

      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="password-toggle-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Loading..." : "Sign in"} {/* Show loading text while loading */}
        </button>
      </div>
      <p className="forgot-password text-right">
        Don`t have an account? <a href="/register">Create one now</a>
      </p>
    </form>
  </div>

  );
}

export default Login;