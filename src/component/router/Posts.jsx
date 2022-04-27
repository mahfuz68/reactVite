import React from 'react';
import { Link } from 'react-router-dom';

export default function Posts() {
    return (
        <div>
            <ul>
                <li><Link to="/post/1"> post 1 </Link></li>
                <li><Link to="/post/2"> post 2 </Link></li>
                <li><Link to="/post/3"> post 3 </Link></li>

            </ul>
        </div>
    );
}
