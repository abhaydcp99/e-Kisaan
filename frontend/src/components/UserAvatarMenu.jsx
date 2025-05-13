import { useState } from "react";
import { Avatar, Menu, MenuItem, IconButton, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function UserAvatarMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    handleMenuClose();
    navigate("/login");
  };

  const loggedIn = !!localStorage.getItem("token");

  return (
    <>
      {loggedIn && (
        <>
          <IconButton onClick={handleMenuOpen} size="small">
            <Avatar />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            onClick={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Box>{}</Box>
            <MenuItem onClick={() => navigate("/orders")}>My orders</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </>
      )}
    </>
  );
}

export default UserAvatarMenu;
