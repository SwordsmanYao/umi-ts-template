import React from 'react';
import Link from 'umi/link';
// import Count from './components/Count';
import A from 'src/components/A';
import styles from './index.less';
import env from 'src/utils/env';

export default () => {
  console.log(env);

  return (
    <div className={styles.normal}>
      <h2>Index Page</h2>
      <A />
      {/* <Count /> */}
      <br />
      <div>
        <Link to="/list">Go to list.html</Link>
        <br />
        <Link to="/index/detail">Go to index/detail</Link>
        <br />
        <Link to="/multiple/page1">Go to /multiple/page1</Link>
      </div>
    </div>
  );
};
