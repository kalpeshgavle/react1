import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Help from "./Help";
import NavComponent from "./NavComponent";
import DynamicComponent from "./DynamicComponent";
import Component1 from "./Component1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavComponent />,
    children: [
      {
        path: "/home",
        element: <Home />,
        children: [
          {
            path: "component1",
            element: <Component1 />,
            children: [
              {
                path: "component1/:name",
                element: <DynamicComponent />,
              },
            ],
          },
          {
            path: "component2",
            element: <h1>Component 2</h1>,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "help",
        element: <Help />,
      },
    ],
  },
]);

export default router;
