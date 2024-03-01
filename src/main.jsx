import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Resume from "./routes/Resume";
import Portfolio from "./routes/Portfolio";
import Contact from "./routes/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/AboutPage",
    element: <About />,
  },
  { 
    path: "/ResumePage", 
    element: <Resume /> 
  },
  { 
    path: "/PortfolioPage", 
    element: <Portfolio /> 
  },
  { 
    path: "/ContactoPage", 
    element: <Contact /> 
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
