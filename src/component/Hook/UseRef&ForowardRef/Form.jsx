import React, { useEffect, useRef } from 'react';
import Input from './Input';

export default function Form() {
    const inputRef = useRef(null);
    useEffect(() => {
    // component did load
        inputRef.current.focus();
    }, []);

    return (
        <div>

            <Input ref={inputRef} type="text" placeholder="enter something" />
        </div>
    );
}
