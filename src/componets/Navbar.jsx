import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

export default function Navbar() {
  const { user, login } = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="cocktail">
                Cocktails
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="counter">
                Counter
              </NavLink>
            </li>
          </ul>
          <span className="navbar-text">
            {login ? (
              <>
                <p>Welcome, {user}</p>
              </>
            ) : (
              <>
                <NavLink className="btn btn-success" to="login">
                  Login
                </NavLink>
              </>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
}
