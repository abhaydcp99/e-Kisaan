import { useState } from "react";
import api from "../../api.js"; // Make sure this points to your axios instance
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");

    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/products");
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #ffffff, #e0f7fa)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "white",
          borderRadius: "1rem",
        }}
      >
        <h2 className="text-center mb-4 text-success">e-Kisaan</h2>
        <h5 className="text-center mb-3">Login to Continue</h5>
        <form onSubmit={handleLogin}>
          {error && <p className="text-danger text-center">{error}</p>}
          <input
            className="form-control mb-3"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="form-control mb-3"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn btn-success w-100" type="submit">
            Login
          </button>
        </form>
        <Typography>Not registered?</Typography>
        <button
          className="btn btn-success w-100"
          color="secondary"
          onClick={() => navigate("/register")}
        >
          Register Here
        </button>
      </div>
    </div>
  );
}

export default Login;
