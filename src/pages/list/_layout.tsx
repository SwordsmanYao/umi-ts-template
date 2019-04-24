import React from 'react';
import useListContext from './contexts/useListContext';

interface IProps {
  children: React.ReactNode;
}

// 该目录的布局文件
export default (props: IProps) => {
  return (
    <useListContext.Provider>
      <div>
        <div>Header (局部布局文件 _layout.tsx)</div>
        <hr />
        <hr />
        {props.children}
        <hr />
        <div>Footer (局部布局文件 _layout.tsx)</div>
      </div>
    </useListContext.Provider>
  );
};
