import React from 'react';

interface IProps {
  children: React.ReactNode;
}

// 该目录的布局文件
export default (props: IProps) => {
  return (
    <div>
      <div>Header (局部布局文件 _layout.tsx)</div>
      <hr />
      <hr />
      {props.children}
      <hr />
      <div>Footer (局部布局文件 _layout.tsx)</div>
    </div>
  );
};
