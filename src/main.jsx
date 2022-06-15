import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Counter from './component/Counter';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Counter />
    </BrowserRouter>,
    document.getElementById('root')
);
