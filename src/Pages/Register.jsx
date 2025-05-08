import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userType: "customer",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registering user: ${formData.name}`);
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

        <form onSubmit={handleRegister}>
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
          <select
            className="form-control mb-4"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
          >
            <option value="customer">Customer</option>
            <option value="farmer">Farmer</option>
          </select>
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
