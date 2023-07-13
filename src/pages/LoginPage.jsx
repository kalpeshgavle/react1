import React from "react";

export default function LoginPage() {
  const login = () => {
    localStorage.setItem("islogin", true);
  };
  return (
    <div>
      <h2>LoginPage</h2>
      <button onClick={login} className="btn btn-success">
        Login
      </button>
    </div>
  );
}
