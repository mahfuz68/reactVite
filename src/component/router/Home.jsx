import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mt-10 text-center">
            <h1 className="text-2xl text-gray-600 uppercase">This is home page</h1>
            <div className="">
                <ul className="flex space-x-4 justify-center items-center text-lg mt-2">
                    <li>
                        <NavLink className="text-indigo-500 " to="/database">
                            Database
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-indigo-500" to="/posts">
                            Posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-indigo-500" to="/login">
                            Login
                        </NavLink>
                    </li>

                </ul>
            </div>
        </div>
    );
}
