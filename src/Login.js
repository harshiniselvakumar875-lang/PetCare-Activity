
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./App.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate('/dashboard');

    if (!email.trim() || !password.trim()) {
      alert("Please enter email and password");
      return;
    }

    alert("Demo login successful!");
    navigate("/");
  }

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-brand">
          <span>🐾</span>
          <h2>PetCare</h2>
        </div>

        <div className="login-welcome">
          <span className="login-tag">WELCOME BACK</span>
          <h1>Your pets deserve the best care.</h1>
          <p>
            Manage your lovely pets, track daily activities,
            and keep their health on track — all in one place.
          </p>

          <div className="login-pet-image">🐶 🐱</div>

          <div className="login-benefits">
            <p>✓ Manage your pets easily</p>
            <p>✓ Track daily activities</p>
            <p>✓ Never miss a care reminder</p>
          </div>
        </div>

        <p className="login-copyright">
          © 2026 PetCare. Made with 💙 for pets.
        </p>
      </div>

      <div className="login-right">
        <div className="login-card">
          <div className="login-icon">🐾</div>

          <h2>Welcome Back!</h2>
          <p className="login-subtitle">
            Login to continue to your account.
          </p>

          <form onSubmit={handleLogin}>
            <label htmlFor="login-email">Email Address</label>
            <input
              id="login-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="login-password-label">
              <label htmlFor="login-password">Password</label>
              <button
                type="button"
                className="forgot-password"
                onClick={() =>
                  alert("Please contact support to reset your password.")
                }
              >
                Forgot password?
              </button>
            </div>

            <div className="login-password-field">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button type="submit" className="login-submit">
              Login to PetCare →
            </button>
          </form>

          <div className="login-divider">
            <span>YOUR PET'S HAPPY PLACE</span>
          </div>

          <p className="login-signup">
            New to PetCare?{" "}
            <Link to="/signup">Create an account</Link>
          </p>

          <Link to="/" className="login-home">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
