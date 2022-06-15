import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(parseInt(localStorage.getItem('count'), 10) || 0);
    localStorage.setItem('count', count);
    const incrementCount = () => {
        setCount(count + 1);
    };
    const decrementCount = () => {
        setCount(count - 1);
    };
    console.log(count);
    return (
        <div className="flex space-x-3 my-10 items-center">
            <button className="px-2 py-1 border-2 border-black" type="button" onClick={incrementCount}>+</button>
            <h1>{count}</h1>
            <button type="button" className="px-2 py-1 border-2 border-black" onClick={decrementCount}>-</button>

        </div>
    );
}
