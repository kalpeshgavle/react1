import React from "react";
import { Link, createBrowserRouter } from "react-router-dom";
import ComponentA from "./ComponentA";

export const Navbar = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>hello world</h1>
        <Link to="about">About us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <ComponentA />,
  },
]);
