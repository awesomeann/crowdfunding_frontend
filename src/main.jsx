import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import NavBar from "./components/NavBar.jsx";

import LoginPage from "./pages/LoginPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import CreateProjectPage from "./pages/CreateProjectPage.jsx";
import ProjectSettingsPage from "./pages/ProjectSettingsPage.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";

const router = createBrowserRouter([ {
  path: "/",
  element: <NavBar />,
  children: [
    { path: "/", element: <HomePage /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/project/:id", element: <ProjectPage /> },
    { path: "/pledges", element: <ProjectPage /> },
    { path: "/project/create", element: <CreateProjectPage /> },
    { path: "/user/:id", element: <UserPage /> },
    { path: "/project/:id/settings", element: <ProjectSettingsPage /> },

    
  ],
}, ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
