import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState("kalpesh");

  if (user === null) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="about-page">
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ratione
        aspernatur explicabo quia tempora, amet odio delectus accusamus, iusto
        corporis doloremque maxime nemo. Harum dolore maiores accusamus! Rem,
        cum voluptate.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ratione
        aspernatur explicabo quia tempora, amet odio delectus accusamus, iusto
        corporis doloremque maxime nemo. Harum dolore maiores accusamus! Rem,
        cum voluptate.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ratione
        aspernatur explicabo quia tempora, amet odio delectus accusamus, iusto
        corporis doloremque maxime nemo. Harum dolore maiores accusamus! Rem,
        cum voluptate.
      </p>
      <button className="btn btn-danger" onClick={() => setUser(null)}>
        Logout
      </button>
    </div>
  );
}
