import { createBrowserRouter } from "react-router";
import Layout from "./layout";
import Home from "./pages/Home";
import Renos from "./pages/Renos";
import Radon from "./pages/Radon";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "renos", Component: Renos },
      { path: "radon", Component: Radon },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
