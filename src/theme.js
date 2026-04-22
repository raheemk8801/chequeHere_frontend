import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Urbanist, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    body1: { fontWeight: 400 },
  },
  colors: {
    primary: '#4A6CF7',     // Main Blue
    secondary: '#2EC4B6',   // Teal for headers
    bg: '#F8F9FA',          // Off-white background
    border: '#E0E0E0',
    text: '#333333',
    white: '#FFFFFF'
  },

  radius: {
    lg: '30px',             // For main cards
    md: '15px',             // For inputs
    sm: '10px'
  }
});

export default theme;