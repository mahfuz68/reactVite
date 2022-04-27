import React from 'react';

function Title() {
  console.log('Title component rendered');
  return (
    <h1 className="text-3xl">Use callback Test</h1>
  );
}
export default React.memo(Title);
