import React, { useEffect, useRef, useState } from 'react';

export default function Time() {
    const [clock, setClock] = useState(new Date());
    const buttonRef = useRef(null);
    const tick = () => {
        setClock(new Date());
    };

    useEffect(() => {
        console.log('Time component rendered');
        buttonRef.current = setInterval(tick, 1000);

        return () => {
            console.log('component Unmounted');
            clearInterval(buttonRef.current);
        };
    }, []);

    return (
        <div>
            <h1>
                Time:
                {' '}
                {clock.toLocaleTimeString('bn-BD')}
            </h1>
            <button type="button" onClick={() => clearInterval(buttonRef.current)}>cleanup</button>
        </div>
    );
}
