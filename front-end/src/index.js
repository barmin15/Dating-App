import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./tests/reportWebVitals";

//pages
import Register from "./pages/unsecure/Register"
import Login from './pages/unsecure/Login';
import App from './pages/secure/App';
import Profile from "./pages/secure/Profile";
import Discover from "./pages/secure/Discover";
import Matches from "./pages/secure/Matches";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "/app/profile",
        element: <Profile />,
      },
      {
        path:"/app/discover",
        element: <Discover />
      },
      {
        path: "/app/matches",
        element: <Matches />
      }
    ],
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

reportWebVitals();
