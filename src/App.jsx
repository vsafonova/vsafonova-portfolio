import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
    element: <Resume />,
  },
  {
    path: "/PortfolioPage",
    element: <Portfolio />,
  },
  {
    path: "/ContactPage",
    element: <Contact />,
  },
]);

export default function App() {
  return (
    <>
      {router.map(({ path, element }) => (
        <RouterProvider key={path} router={router}>
          {element}
        </RouterProvider>
      ))}
    </>
  );
}
