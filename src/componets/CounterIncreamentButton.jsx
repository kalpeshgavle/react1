import React, { useContext } from "react";
import { DataContext } from "./CountContext";

export default function CounterIncreamentButton() {
  const { count, setCount } = useContext(DataContext);
  return (
    <button onClick={() => setCount(count + 1)} className="btn btn-primary">
      Inncreament
    </button>
  );
}
