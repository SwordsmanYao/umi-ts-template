import { useState } from 'react';
import createUseContext from 'constate';

function useCounter() {
  const [count, setCount] = useState(0);
  // 同步
  const increment = () => setCount(count + 1);
  // 异步
  const asyncIncrement = async () => {
    const asyncCount = await new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        resolve(count + 1);
      }, 1000);
    });
    setCount(asyncCount);
  };
  return { count, increment, asyncIncrement };
}

export default createUseContext(useCounter);
