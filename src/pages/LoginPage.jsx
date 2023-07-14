import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("islogin", true);
    navigate("/");
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
