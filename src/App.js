import React, { useState } from "react";
import "./styles.css";
import { Cosmetics } from "./components/Cosmetics.js";

export default function App() {
  const [count, setCount] = useState(0);

  setTimeout(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <>
      <Cosmetics />
    </>
  );
}
