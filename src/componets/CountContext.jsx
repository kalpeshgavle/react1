import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

export default function CounterContext({ children }) {
  const [count, setCount] = useState(0);

  return (
    <DataContext.Provider value={{ count, setCount }}>
      {children}
    </DataContext.Provider>
  );
}
