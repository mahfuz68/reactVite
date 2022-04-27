import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/router/Home';
import Login from './component/router/Login';
import Post from './component/router/Post';
import Posts from './component/router/Posts';
import PrivateOutlate from './component/router/PrivateOutlate';
import Database from './fire/Database';

export default function Primary() {
    return (
        <div>

            <Routes>
                <Route index element={<Home />} />

                <Route path="/post/:postId" element={<Post />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<PrivateOutlate />}>
                    <Route path="/database" element={<Database />} />
                    <Route path="/posts" element={<Posts />} />
                </Route>

            </Routes>

        </div>
    );
}
