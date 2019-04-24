import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

interface IProps {
  count: number;
  dispatch: (x: any) => {};
}

class Count extends React.Component<IProps, any> {
  public render() {
    const { count, dispatch } = this.props;

    return (
      <div>
        <div>Count: {count}</div>
        <br />
        <div>
          <Button
            type="primary"
            onClick={() => {
              dispatch({ type: 'count/increase' });
            }}
          >
            Increase
          </Button>
          <Button
            type="ghost"
            onClick={() => {
              dispatch({ type: 'count/decrease' });
            }}
          >
            Decrease
          </Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(Count);
