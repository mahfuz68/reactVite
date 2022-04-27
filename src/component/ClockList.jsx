import React, { Component } from 'react';
import Clock from './Clock';

export default class ClockList extends Component {
  render() {
    const { quantities } = this.props;
    return (
      <div>
        {quantities.map((key) => (
          <Clock key={key} />
        ))}
      </div>
    );
  }
}
