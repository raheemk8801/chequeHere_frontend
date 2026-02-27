import { Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

import LoginPage from "./pages/Login/LoginPage.jsx";
import HomePage from "./pages/Home/Home.jsx";

function ProtectedHome() {
  return (
    <>
      <SignedIn>
        <HomePage />
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/sign-in/*" element={<LoginPage />} />
      <Route path="/home" element={<ProtectedHome />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
