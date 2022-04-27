import React, { Component } from 'react';

export default class HoverCounter extends Component {
  state = { count: 0 };

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <button className="mt-4" type="button" onFocus={this.incrementCount} onMouseOver={this.incrementCount}>
          Hovered
          {' '}
          {count}
          {' '}
          time
        </button>
      </div>
    );
  }
}
