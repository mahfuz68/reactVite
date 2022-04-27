import React from 'react';

function Button({ children, handleClick }) {
  console.log(`rendered ${children} component`);
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {children}
      </button>

    </div>
  );
}
export default React.memo(Button);
