import React, { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { user, setUser, setLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (user !== "") {
      setUser(user);
      setLogin(true);
      navigate("/");
    }
  };
  return (
    <div>
      <h2>Login Here</h2>
      <form action="">
        <input type="text" onChange={(e) => setUser(e.target.value)} /> <br />
        {user === "" && <p>Please enter some value</p>}
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}
