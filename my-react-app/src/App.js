import { useState } from "react";
import module from "./App.module.css";

export function ComponentNumber() {
  const [number, setNumber] = useState({ number: 20 });

  return (
    <div class={module.container}>
      <div class={module.contentDiv}>
        <h1 class={module.text}>{number.number}</h1>
        <button
          className={module.btn}
          onClick={() =>
            setNumber({
              ...number,
              number: number.number + 1,
            })
          }
        >
          Number
        </button>
      </div>
    </div>
  );
}

export default ComponentNumber;
