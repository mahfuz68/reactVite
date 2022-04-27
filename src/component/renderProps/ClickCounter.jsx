import React from 'react';

export default class ClickCounter extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <>
        <button className="mt-4" type="button" onClick={incrementCount}>
          Clicked
          {' '}
          {count}
          {' '}
          time
        </button>
        <br />

      </>
    );
  }
}
