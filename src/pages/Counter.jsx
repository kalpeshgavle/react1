import React, { useContext } from "react";
import { DataContext } from "../componets/CountContext";
import CounterIncreamentButton from "../componets/CounterIncreamentButton";

export default function Counter() {
  const { count } = useContext(DataContext);
  return (
    <div>
      <h1>Counter</h1>
      <p>Count : {count}</p>
      <CounterIncreamentButton />
    </div>
  );
}
