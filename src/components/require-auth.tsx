import React from 'react';
import { useLocation, Navigate, Route, RouteProps } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

export function RequireAuth({ children }: any) {
    const location = useLocation();
    const { route } = useAuthenticator((context) => [context.route]);

    console.log(route);
    if (route !== 'authenticated') {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}
