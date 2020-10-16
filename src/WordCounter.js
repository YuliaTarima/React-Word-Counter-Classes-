import React from 'react';

function WordCounter({ count }) {
  return (
    <p className="mb2">
      <label htmlFor="count">Word count: </label>
      <output id="count">
        {count}
      </output>
    </p>
  );
}

export default WordCounter;
