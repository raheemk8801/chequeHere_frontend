import { SignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignedIn>
        <Navigate to="/home" replace />
      </SignedIn>

      <SignedOut>
        <SignIn path="/sign-in" routing="path" fallbackRedirectUrl="/home" />
      </SignedOut>
    </div>
  );
}
