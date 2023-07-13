import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorComponent() {
  const error = useRouteError();
  return (
    <div>
      <p>{error.message}</p>
      <Link to="/">Go to home page</Link>
    </div>
  );
}
