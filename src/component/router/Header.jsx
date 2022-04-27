import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <Routes>
                <Route
                    path="world"
                    element={(
                        <div>
                            <p>
                                World component
                            </p>

                        </div>
                    )}
                />
            </Routes>
            <p>Header</p>
        </div>
    );
}
