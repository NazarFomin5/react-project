import { useState, useEffect } from "react";
import module from "./App.module.css";

export function ComponentNumber() {
  const [number, setNumber] = useState(20);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    setCount2(number + 1);
  }, [number]);

  return (
    <div class={module.container}>
      <div class={module.contentDiv}>
        <h2 class={module.counttext}>Counter: {count2}</h2>
        <h1 class={module.text}>{number}</h1>
        <button className={module.btn} onClick={() => setNumber(number + 1)}>
          Number
        </button>
      </div>
    </div>
  );
}

export default ComponentNumber;
