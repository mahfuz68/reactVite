import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../lib/useAuth';

export default function PrivateOutlate() {
    const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to="/login" />;
}
