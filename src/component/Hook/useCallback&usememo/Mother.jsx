import React, { useCallback, useMemo, useState } from 'react';
import Button from './Button';
import ShowCount from './ShowCount';
import Title from './Title';

export default function Mother() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prev) => prev + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((prev) => prev + 5);
  }, []);
  const isEvenOrOdd = useMemo(() => {
    console.log('isEvenOrOdd function Rendered');
    let i = 0;
    while (i < 1000000000) {
      i += 1;
    }
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <Title />
      <ShowCount title="count One" count={count1} />
      <Button handleClick={incrementByOne}>Increment By One</Button>
      <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
      <hr className="my-5" />
      <ShowCount title="count Five" count={count2} />
      <Button handleClick={incrementByFive}>Increment By Five</Button>
    </div>
  );
}
