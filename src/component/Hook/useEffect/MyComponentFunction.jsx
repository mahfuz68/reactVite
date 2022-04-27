import React, { useEffect, useState } from 'react';

export default function MyComponentFunction() {
    const [clock, setClock] = useState(new Date());
    const [count, setCount] = useState(0);

    const addClick = () => {
        setCount((prev) => prev + 1);
    };

    const tick = () => {
        console.log('clock Ticking');
        setClock(new Date());
    };

    useEffect(() => {
        console.log('updating document title');
        document.title = `Clicked ${count} time`;
    }, [count]);

    useEffect(() => {
        console.log('Starting Timer');
        const interval = setInterval(tick, 1000);

        // do the cleanup - stop the timer
        return () => {
            console.log('Component Unmounted!');
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <h1>
                Time:
                {' '}
                {clock.toLocaleTimeString('bn-BD')}
            </h1>

            <button type="button" onClick={addClick}>
                Click
            </button>
        </div>
    );
}
