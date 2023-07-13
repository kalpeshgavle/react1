import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Help() {
  return (
    <div className="help-page">
      <h1>Help Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        corporis tempora qui, alias maxime, harum reprehenderit laudantium sunt,
      </p>

      <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
