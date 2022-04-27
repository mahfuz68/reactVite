/* eslint-disable max-len */
import React, { useContext } from 'react';
import ThemeContext from '../../contexts/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;

    return (
        <div>
            <h1>this is content page</h1>
            <Counter render={(count, incrementCount) => (
                <ThemeContext.Consumer>
                    {() => (<HoverCounter count={count} theme={theme} switchTheme={switchTheme} incrementCount={incrementCount} />)}
                </ThemeContext.Consumer>
            )}
            />

        </div>
    );
}
