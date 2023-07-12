import React from "react";
import { useParams } from "react-router-dom";

function DynamicComponent() {
  const params = useParams();
  const { name } = params;
  return (
    <div>
      <h1>Dynamic component</h1>
      <p>dynamanic data is : {name}</p>
    </div>
  );
}

export default DynamicComponent;
