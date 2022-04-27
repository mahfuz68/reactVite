import React, { Component } from 'react';
import HoverCounter from './HoverCounter';

export default class ClickCounter extends Component {
  state = { count: 0 };

  clickHandler = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <button type="button" onClick={this.clickHandler}>
          clicked
          {' '}
          {count}
          {' '}
          time
        </button>
        <br />
        <HoverCounter />
      </div>
    );
  }
}
