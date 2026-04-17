import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { ThemeProvider } from "@mui/material/styles"; // 🔥 add this
import App from "./App.jsx";
import "./index.css";
import theme from "./theme"; // 🔥 import your theme

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      signInUrl="/sign-in"
      afterSignOutUrl="/sign-in"
      appearance={{
        variables: {
          colorPrimary: "#2563eb",
          borderRadius: "10px",
          centerPage: "true",
        },
      }}
    >
      {/* 🔥 Wrap here */}
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ClerkProvider>
  </React.StrictMode>
);