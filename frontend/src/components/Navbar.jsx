import { useState } from "react";
import { AppBar, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import UserAvatarMenu from "../components/UserAvatarMenu";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const loggedIn = !!localStorage.getItem("token");
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppBar position="static" elevation={2} style={{ background: "#2e7d32" }}>
      <nav
        className="navbar navbar-expand-lg navbar-dark px-4"
        style={{ minHeight: "70px" }}
      >
        <Link
          className="navbar-brand fs-3 fw-bold text-white"
          to="/"
          style={{ letterSpacing: "1px" }}
        >
          e-Kisaan
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            {[
              { label: "Explore Products", to: "/products" },
              { label: "About", to: "/About" },
              { label: "Products", to: "/products" },
              { label: "Orders", to: "/Orders" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="nav-link text-white fw-semibold"
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontSize: "1.05rem",
                    transition: "0.3s",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link
                className="nav-link text-white fw-semibold"
                to="/Cart"
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: "1.05rem",
                  transition: "0.3s",
                }}
              >
                <ShoppingCartIcon />
              </Link>
            </li>
            <Stack direction={"row"}>
              <li className="nav-item">
                <Link
                  className="nav-link text-white fw-semibold"
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontSize: "1.05rem",
                    transition: "0.3s",
                  }}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white fw-semibold"
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontSize: "1.05rem",
                    transition: "0.3s",
                  }}
                >
                  Register
                </Link>
              </li>
            </Stack>
            {loggedIn && <UserAvatarMenu />}
          </ul>
        </div>
      </nav>
    </AppBar>
  );
}

export default Navbar;
