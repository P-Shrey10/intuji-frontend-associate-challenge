import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProtectedLayout from "../ProtectedLayout";
import Login from "../components/login/Login";
import Signup from "../components/signup/Signup";
import ForgotPassword from "../components/forget_password/ForgetPassword";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Schedule from "../pages/Schedule";
import Message from "../pages/Message";
import Analytics from "../pages/Analytics";
import Team from "../pages/Team";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Help from "../pages/Help";
import Logout from "../pages/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forget-password",
        element: <ForgotPassword />,
      },
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/schedule",
            element: <Schedule />,
          },
          {
            path: "/message",
            element: <Message />,
          },
          {
            path: "/analytics",
            element: <Analytics />,
          },
          {
            path: "/team",
            element: <Team />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/settings",
            element: <Settings />,
          },
          {
            path: "/help",
            element: <Help />,
          },
          {
            path: "/logout",
            element: <Logout />,
          },
        ],
      },
    ],
  },
]);

export default router;
