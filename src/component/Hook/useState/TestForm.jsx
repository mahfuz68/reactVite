import React, { useState } from 'react';

export default function TestForm() {
  const [todo, setTodo] = useState({ title: '', description: '' });
  const { title, description } = todo;
  console.log(description);
  return (
    <div>
      <h1>{title}</h1>
      <input type="text" name="" id="" value={title} onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
      <p>
        <textarea
          name="text_area"
          id=""
          cols="30"
          rows="10"
          value={description}
          onChange={(e) => {
            setTodo({ ...todo, description: e.target.value });
          }}
        />
      </p>

    </div>
  );
}
