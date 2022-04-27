import { Navigate } from 'react-router-dom';
import useAuth from '../../lib/useAuth';

export default function PrivateRoute({ children }) {
    const auth = useAuth();

    return auth ? children : <Navigate to="/login" />;
}
