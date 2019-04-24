import React from 'react';
import Link from 'umi/link';
import Count from './components/Count';
import styles from './index.less';
import useCounterContext from './contexts/useCounterContext';

export default () => {
  return (
    <useCounterContext.Provider>
      <div className={styles.normal}>
        <h2>Index Page</h2>
        <Count />
        <Count />
        <br />
        <div>
          <Link to="/list">Go to list.html</Link>
          <br />
          <Link to="/index/detail">Go to index/detail</Link>
          <br />
          <Link to="/multiple/page1">Go to /multiple/page1</Link>
        </div>
      </div>
    </useCounterContext.Provider>
  );
};
