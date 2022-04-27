import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './component/router/Header';
import Login from './component/router/Login';
import Post from './component/router/Post';
import Posts from './component/router/Posts';
import PrivateOutlate from './component/router/PrivateOutlate';
import Database from './fire/Database';

export default function rr() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/database" />} />
                <Route path="/" element={<PrivateOutlate />}>
                    <Route path="/database" element={<Database />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/post/:postId" element={<Post />} />
                </Route>

                <Route path="/header/*" element={<Header />} />
                <Route path="/login" element={<Login />} />

            </Routes>

        </div>
    );
}
