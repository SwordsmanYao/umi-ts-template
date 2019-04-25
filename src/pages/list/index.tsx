/**
 * title: list123
 * Routes:
 *   - ./src/routes/PrivateRoute.tsx
 */

// 可通过以上配置一个该页面的鉴权组件

import React, { useEffect } from 'react';
import styles from './index.less';
import useListContext from './contexts/useListContext';
import { useAsyncRetry } from 'react-use';

export default () => {
  const { list, fetchList } = useListContext();
  const { loading, retry } = useAsyncRetry(fetchList);
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className={styles.normal}>
      {loading && 'loading...'}
      {list.map(x => (
        <div key={x.id}>{x.name}</div>
      ))}
      <button onClick={retry}>retry</button>
    </div>
  );
};
