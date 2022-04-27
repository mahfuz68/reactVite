import React, { useState } from 'react';

export default function Todo() {
  const [todo, setTodo] = useState('');
  const [warning, setWarning] = useState();

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const updateWarning = inputValue.includes('.js') ? 'You need Javascript skill to compleat the task. Do you have it?' : null;
    setTodo(inputValue);
    setWarning(updateWarning);
  };

  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea name="todo" id="" cols="30" rows="10" value={todo} onChange={handleInput} />
      </p>
      <hr />
      <h2>{warning || 'Good Choice!'}</h2>
    </div>
  );
}
