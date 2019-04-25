/**
 * title: list123
 * Routes:
 *   - ./src/routes/PrivateRoute.tsx
 */

// 可通过以上配置一个该页面的鉴权组件

import React from 'react';
import styles from './index.less';
import useListContext from './contexts/useListContext';
import nest from 'src/utils/constateNest';

const List = () => {
  const { list, fetchList, loading } = useListContext();

  return (
    <div className={styles.normal}>
      {loading && 'loading...'}
      {list.map(x => (
        <div key={x.id}>{x.name}</div>
      ))}
      <button onClick={fetchList}>retry</button>
    </div>
  );
};

export default nest(useListContext.Provider, List);
