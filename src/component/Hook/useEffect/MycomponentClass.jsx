import React, { Component } from 'react';

export default class MycomponentClass extends Component {
    state = { count: 0, clock: new Date(), local: 'bn-BD' };

    componentDidMount() {
        this.timeCount = setInterval(() => { this.tick(); }, 1000);
        const { count } = this.state;
        document.title = `Clicked ${count} time`;
    }

    componentDidUpdate() {
        const { count } = this.state;
        document.title = `Clicked ${count} time`;
    }

    componentWillUnmount() {
        clearInterval(this.timeCount);
    }

    tick = () => {
        this.setState({ clock: new Date() });
    };

    addClick = () => {
        this.setState(({ count }) => ({ count: count + 1 }));
    };

    render() {
        const { clock, local, count } = this.state;

        return (
            <div>
                <h1>
                    Time:
                    {' '}
                    {clock.toLocaleTimeString(local)}
                </h1>

                <button type="button" onClick={this.addClick}>
                    Click
                </button>
            </div>
        );
    }
}
