import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(true);

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Daily Sales", path: "/daily-sales" },
    { name: "Payment Calendar", path: "/payment-calendar" },
    { name: "Payroll", path: "/payroll" },
    { name: "Employees", path: "/employees" },
    { name: "Profiles", path: "/profiles" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: open ? 200 : 60,
          backgroundColor: "#212429",
          color: "#fff",
          minHeight: "100vh",
          transition: "width 0.3s",
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                sx={{
                  color: location.pathname === item.path ? "#000" : "#fff",
                  backgroundColor:
                    location.pathname === item.path ? "#DAF067" : "transparent",
                  "&:hover": { backgroundColor: "#DAF067", color: "#000" },
                }}
                onClick={() => navigate(item.path)}
              >
                <ListItemText primary={item.name} sx={{ pl: open ? 2 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <button onClick={() => setOpen(!open)} style={{ margin: 10 }}>
          {open ? "Collapse" : "Expand"}
        </button>
      </Box>

      {/* Main content */}
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Sidebar;
