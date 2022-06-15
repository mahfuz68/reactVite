import React, { Component } from 'react';

export default class Button extends Component {
    shouldComponentUpdate(nextProps) {
        const { local: currentChange } = this.props;
        const { local: nextChange } = nextProps;
        if (currentChange === nextChange) {
            return false;
        }
        return true;
    }

    render() {
        const {
            change, local, show, enable
        } = this.props;
        if (!enable) {
            return null;
        }
        return (
            <>

                <button
                    className="px-2 py-1 flex items-center mx-auto capitalize border-dotted border-red-200 border-4"
                    onClick={() => change(local)}
                    type="button"
                >
                    <div className="text-center">
                        {local === 'bn-BD' ? 'Click Here' : 'এখানে ক্লিক করুন '}
                    </div>
                </button>

                <div className="text-center text-3xl mt-4 capitalize">
                    {show && 'hello '}
                    <span className="text-3xl text-red-300">Hello world!</span>
                </div>
            </>
        );
    }
}
