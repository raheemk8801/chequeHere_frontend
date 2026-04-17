import { createBrowserRouter } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import Home from "../pages/Home/Home";
import DailySales from "../pages/DailySales/DailySales";
import PaymentCalendar from "../pages/PaymentCalendar/PaymentCalendar";
import Payroll from "../pages/Payroll/Payroll";
import Employees from "../pages/Employees/Employees";
import Profiles from "../pages/Profiles/Profiles";
import Suppliers from "../pages/Suppliers/Suppliers";
import Liability from "../pages/Liability/Liability";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    element: <Sidebar />, 
    errorElement: <ErrorPage />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/daily-sales", element: <DailySales /> },
      { path: "/payment-calendar", element: <PaymentCalendar /> },
      { path: "/payroll", element: <Payroll /> },
      { path: "/employees", element: <Employees /> },
      { path: "/profiles", element: <Profiles /> },
       { path: "/suppliers", element: <Suppliers /> },
        { path: "/liability", element: <Liability /> },
      { path: "/", element: <Home /> }, // default route
    ],
  },
  {
    path: "/login",
    element: <div>Login Page (placeholder)</div>,
  },
]);

export default router;
