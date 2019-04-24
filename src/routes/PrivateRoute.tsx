import React from 'react';

interface IProps {
  children: React.ReactNode;
}

// 该组件可用于鉴权路由
export default (props: IProps) => {
  return (
    <div>
      <div>PrivateRoute (routes/PrivateRoute.js)</div>
      {props.children}
    </div>
  );
};
