import { useState } from "react";
import api from "../../api.js";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    userType: "customer",
  });

  const [error, setError] = useState(""); // Error state for form validation

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    const { name, email, password, mobile } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (name.trim().length === 0) {
      return "Name cannot be empty";
    }
    if (!emailRegex.test(email)) {
      return "Invalid email format";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters";
    }
    if (!mobileRegex.test(mobile)) {
      return "Mobile must be a 10-digit number";
    }
    return ""; // Return an empty string if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm(); // Check if the form is valid
    if (validationError) {
      setError(validationError); // Set the error state if validation fails
      return;
    }

    try {
      const res = await api.post("/auth/register", formData);
      localStorage.setItem("token", res.data.token);
      alert("Registration successful!");
    } catch (err) {
      setError(err.response?.data?.msg || "Registration failed");
    }
  };

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to right, #ffffff, #e0f7fa)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  };

  const boxStyle = {
    background: "rgba(255, 255, 255, 0.95)",
    padding: "2rem",
    width: "100%",
    maxWidth: "450px",
    borderRadius: "1rem",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle} className="shadow-lg">
        <h2 className="text-center text-success mb-3"> e-Kisaan </h2>
        <h5 className="text-center text-muted mb-4">Create Your Account</h5>

        <form onSubmit={handleSubmit}>
          {error && <p className="text-danger text-center">{error}</p>}
          <input
            className="form-control mb-3"
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="form-control mb-3"
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="form-control mb-3"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            className="form-control mb-3"
            name="mobile"
            type="tel"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <button className="btn btn-success w-100" type="submit">
            Register
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <a href="/login" className="text-decoration-none text-primary">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
