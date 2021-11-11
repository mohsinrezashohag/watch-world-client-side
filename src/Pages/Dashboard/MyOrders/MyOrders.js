import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])



    useEffect(() => {

        const url = `http://localhost:5000/myOrders?email=${user?.email}`

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })

    }, [])

    return (
        <div>
            <h2 className="section-heading">My Orders</h2>

            <h1>My Total Orders : {orders.length}</h1>

        </div>
    );
};

export default MyOrders;