import { useState } from "react";
export function ComponentNamber() {
  const [namber, setnamber] = useState({ namber: 20 });
  return (
    <div>
      {namber.namber}
      <button
        onClick={() =>
          setnamber({
            ...namber,
            namber: namber.namber + 1,
          })
        }
      >
        Namber
      </button>
    </div>
  );
}

export default ComponentNamber;
