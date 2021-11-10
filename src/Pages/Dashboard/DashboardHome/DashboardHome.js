import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div>

            <h1>Dashboard</h1>

            <Link to='/addWatches'>Add Watches </Link>
        </div >
    );
};

export default DashboardHome;