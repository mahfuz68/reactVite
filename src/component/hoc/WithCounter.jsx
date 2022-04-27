import React from 'react';

const WithCounter = (OriginalComponent) => {
  class NewComponent extends React.Component {
    state = { count: 0 };

    incrementCount = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
      const { count } = this.state;
      return <OriginalComponent count={count} incrementCount={this.incrementCount} />;
    }
  }
  return NewComponent;
};

export default WithCounter;
