import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h3>Error Page</h3>
      <p>No Page found</p>
      <Link to="/">Go to home page</Link>
    </div>
  );
}
