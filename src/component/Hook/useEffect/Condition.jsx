import React, { useState } from 'react';
import MyComponentFunction from './MyComponentFunction';

export default function Condition() {
    const [show, setShow] = useState(true);

    return (
        <div>
            {show && <MyComponentFunction />}

            <button type="button" onClick={() => setShow((prev) => !prev)}>{show ? 'Hide Post' : 'Show Post'}</button>
        </div>
    );
}
