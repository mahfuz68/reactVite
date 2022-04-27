import React from 'react';

function ShowCount({ title, count }) {
  console.log(`rendered ${title} component`);
  return (
    <div>
      <p className="mb-2">
        {title}
        {' '}
        is
        {' '}
        {count}
      </p>

    </div>
  );
}
export default React.memo(ShowCount);
