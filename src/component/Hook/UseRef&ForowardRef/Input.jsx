import React from 'react';

function Input({ type, placeholder }, ref) {
    return (
        <div className="mt-5">
            <input className="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 text-lg rounded border-2" ref={ref} type={type} placeholder={placeholder} />
        </div>
    );
}
const ForwardInput = React.forwardRef(Input);
export default ForwardInput;
