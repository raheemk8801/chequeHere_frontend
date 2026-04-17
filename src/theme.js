import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Urbanist, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    body1: { fontWeight: 400 },
  },
});

export default theme;