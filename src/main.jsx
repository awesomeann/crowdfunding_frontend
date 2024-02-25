import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import NavBar from "./components/NavBar.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";

const router = createBrowserRouter([ {
  path: "/",
  element: <NavBar />,
  children: [
    { path: "/", element: <HomePage /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/project/:id", element: <ProjectPage /> },
    { path: "/user/:id", element: <UserPage /> },
    
  ],
}, ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
