import React from 'react';
import useCounterContext from '../contexts/useCounterContext';

function Count() {
  const { count, increment, asyncIncrement } = useCounterContext();

  return (
    <div>
      <div>Count: {count}</div>
      <br />
      <div>
        <button onClick={increment}>Increase</button>
        &nbsp;
        <button onClick={asyncIncrement}>asyncIncrement</button>
      </div>
    </div>
  );
}

export default Count;
