import React, { Component } from 'react';

export default class Form extends Component {
    state = {
        title: 'javascript',
        text: 'javascript',
        library: 'react',
        isMail: true
    };

    handleChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({ title: e.target.value });
        } else if (e.target.type === 'textarea') {
            this.setState({ text: e.target.value });
        } else if (e.target.type === 'select-one') {
            this.setState({ library: e.target.value });
        } else if (e.target.type === 'checkbox') {
            this.setState({ isMail: e.target.checked });
        } else {
            console.log('nothing');
        }
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        const {
            title, text, library, isMail
        } = this.state;
        console.log(title, text, library, isMail);
    };

    render() {
        const {
            title, text, library, isMail
        } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <input
                        className=" border-2 border-blue-300 text-gray-600 flex items-center mt-5"
                        type="text"
                        name="text"
                        value={title}
                        onChange={this.handleChange}
                    />

                    <br />
                    <textarea
                        className="border-3 border-red-300 focus:ring-4 "
                        name="text"
                        cols="30"
                        rows="10"
                        value={text}
                        onChange={this.handleChange}
                    />
                    <br />

                    <select
                        value={library}
                        onChange={this.handleChange}
                        className="px-2 py-1 bg-red-300 "
                        name="select"
                        id=""
                    >
                        <option value="react"> React</option>
                        <option value="angular">Angular</option>
                    </select>

                    <br />
                    <input
                        type="checkbox"
                        name="mail"
                        checked={isMail}
                        onChange={this.handleChange}
                        id=""
                    />
                    <br />
                    <input
                        className="border-4 border-red-600 px-4 py-2"
                        type="submit"
                        value="submit"
                    />
                </form>
            </div>
        );
    }
}
