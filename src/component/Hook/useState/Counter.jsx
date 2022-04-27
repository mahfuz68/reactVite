import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const addFive = () => {
    let i = 0;
    while (i < 5) {
    //   setCount(count + 1);
      setCount((prev) => prev + 1);
      i += 1;
    }
  };
  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount((prevState) => (prevState + 1))}>add 1</button>
      <button type="button" onClick={addFive}>add 5</button>
    </div>
  );
}
