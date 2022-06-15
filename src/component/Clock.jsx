import React, { Component } from 'react';
import Button from './Button';

export default class Clock extends Component {
    constructor() {
        super();
        this.state = {
            time: new Date(),
            local: 'en-US'
        };
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (local) => {
        this.setState({ local });
    };

    tick() {
        this.setState({ time: new Date() });
    }

    render() {
        const { time, local } = this.state;

        return (
            <div className="mt-12">
                <h1 className="bg-red-500 text-4xl my-3 text-center text-red-400">
                    Clock Component
                </h1>
                <h2 className="text-2xl font-bold my-3 text-blue-500 text-center">
                    now
                    {' '}
                    {time.toLocaleTimeString(local)}
                </h2>
                {local === 'bn-BD' ? (
                    <Button
                        local="en-US"
                        enable={false}
                        show={false}
                        change={this.handleClick}
                    />
                ) : (
                    <Button local="bn-BD" show enable change={this.handleClick} />
                )}
            </div>
        );
    }
}
