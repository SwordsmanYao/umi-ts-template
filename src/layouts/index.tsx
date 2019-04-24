import React, { Component } from 'react';

// 最外层布局组件，如果有多种布局则在该组件中判断使用那种布局
interface IProps {
  children: React.ReactNode;
}
class Layouts extends Component<IProps> {
  public render() {
    const { children } = this.props;

    return (
      <div>
        <div>Header (layouts/index.js)</div>
        <hr />
        <hr />
        {children}
        <hr />
        <div>Footer (layouts/index.js)</div>
      </div>
    );
  }
}

export default Layouts;

// url 变化了，但页面组件也刷新，是什么原因？
// layouts/index.js 里如果用了 connect 传数据，需要用 umi/withRouter 高阶一下。
// import withRouter from 'umi/withRouter';

// export default withRouter(connect(mapStateToProps)(LayoutComponent));
