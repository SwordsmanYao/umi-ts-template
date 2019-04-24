/**
 * title: list123
 * Routes:
 *   - ./src/routes/PrivateRoute.tsx
 */

// 可通过以上配置一个该页面的鉴权组件

import React, { useEffect } from 'react';
import styles from './index.less';
import useListContext from './contexts/useListContext';

export default () => {
  const { list, fetchList } = useListContext();
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className={styles.normal}>
      {list.map(x => (
        <div key={x.id}>{x.name}</div>
      ))}
    </div>
  );
};
