import { Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import LoginPage from "./pages/Login/LoginPage.jsx";
import HomePage from "./pages/Home/Home.jsx";
import Sidebar from "./components/navigation/Sidebar.jsx";
import DailySales from "./pages/DailySales/DailySales.jsx";
import Employees from "./pages/Employees/Employees.jsx";
import Payroll from "./pages/Payroll/Payroll.jsx";
import Suppliers from "./pages/Suppliers/Suppliers.jsx";
import Profiles from "./pages/Profiles/Profiles.jsx";
import Liability from "./pages/Liability/Liability.jsx";
import PaymentCalendar from "./pages/PaymentCalendar/PaymentCalendar.jsx";
function ProtectedHome() {
  return (
    <>
      <SignedIn>
        <Sidebar />
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
      <Route element={<ProtectedHome />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/daily-sales" element={<DailySales />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/liability" element={<Liability />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/payment-calendar" element={<PaymentCalendar />} />
      </Route>
      {/* <Route path="*" element={<Navigate to="/home" replace />} /> */}
    </Routes>
  );
}
