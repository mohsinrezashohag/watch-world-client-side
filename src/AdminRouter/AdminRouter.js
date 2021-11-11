import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const AdminRouter = ({ children, ...rest }) => {

    const { isLoading, admin } = useAuth();

    if (isLoading) {
        return <h1>Loading ....</h1>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRouter;


