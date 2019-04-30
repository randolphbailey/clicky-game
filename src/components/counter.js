import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  render() {
    return <>{this.state.count}</>;
  }
}

export default Counter;
