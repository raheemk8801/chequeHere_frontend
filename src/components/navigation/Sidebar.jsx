import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

// 🔹 Import your icons
import dashboardIcon from "../../assets/Icons/fi-sr-apps.png";
import salesIcon from "../../assets/Icons/fi-sr-dollar.png";
import payrollIcon from "../../assets/Icons/fi-sr-dollar.png";
import calendarIcon from "../../assets/Icons/fi-sr-calendar.png";
import employeeIcon from "../../assets/Icons/Group 35.png";
import profileIcon from "../../assets/Icons/fi-sr-apps-delete.png";
import supplierIcon from "../../assets/Icons/fi-sr-shopping-cart-add.png";

// 🔹 Import logo
import logo from "../../assets/Icons/logo.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/home", icon: dashboardIcon },
    { name: "Daily Sales", path: "/daily-sales", icon: salesIcon },
    { name: "Payroll", path: "/payroll", icon: payrollIcon },
    { name: "Payment Calendar", path: "/payment-calendar", icon: calendarIcon },
    { name: "Employees", path: "/employees", icon: employeeIcon },
    { name: "Liability", path: "/liability", icon: profileIcon },
    { name: "Suppliers", path: "/suppliers", icon: supplierIcon },
    { name: "Profile", path: "/profiles", icon: profileIcon },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/* 🔹 Sidebar */}
      <Box
        sx={{
          width: open ? 230 : 70,
          background: "#0E1F5E",
          color: "#fff",
          minHeight: "100vh",
          transition: "width 0.3s",
        }}
      >
        {/* 🔹 Logo */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: open ? 120 : 40,
              transition: "0.3s",
              cursor: "pointer",
            }}
            onClick={() => setOpen(!open)} // toggle sidebar
          />
        </Box>

        {/* 🔹 Menu */}
        <List>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    px: 2,
                    py: 1.2,
                    backgroundColor: isActive ? "#F1B657" : "transparent",
                    borderRadius: 10
                  }}
                >
                  {/* 🔹 Icon */}
                  <Box
                    component="img"
                    src={item.icon}
                    alt={item.name}
                    sx={{
                      width: 24,
                      height: 24,
                      filter: isActive
                        ? "brightness(0)"
                        : "brightness(0) invert(1)",
                    }}
                  />

                  {/* 🔹 Text */}
                  {open && (
                    <ListItemText
                      primary={item.name}
                      sx={{
                        color: isActive ? "#000" : "#fff",
                        "&:hover": {
                          color: "#F1B657",
                        },
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* 🔹 Main Content */}
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Sidebar;