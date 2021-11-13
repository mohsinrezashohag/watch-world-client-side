import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    const [isDeleted, setIsDeleted] = useState(null)


    const email = user.email;

    useEffect(() => {
        fetch(`https://hidden-tor-06620.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(data => {

                setOrders(data)
            })
    }, [email, isDeleted])


    const handleDeleteOrder = (id) => {
        const isConfirm = window.confirm("⛔⛔ Are You Sure About Delete This Order ?")
        if (isConfirm) {
            fetch(`https://hidden-tor-06620.herokuapp.com/ordersDelete/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setIsDeleted(true)
                    }
                    else {
                        setIsDeleted(false)
                    }
                })
        }

    }





    return (
        <div>
            <h2 className="section-heading">My Orders</h2>

            <h1 className='sub-heading'>Total Orders : {orders.length}</h1>



            <Table className="table table-bordered border-secondary mt-5" style={{ textAlign: 'left', width: '90%', margin: '0px auto' }}>
                <thead>
                    <tr>

                        <th>Ordered Item</th>
                        <th>Status</th>
                        <th>Cancel Order</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        orders.map(order =>
                            <tr key={order?._id}>
                                <td>{order?.watchName}</td>
                                <td>{order?.status === "Pending" ? <p className="text-danger">Pending</p> : <p className="text-success">Shipped</p>}</td>
                                <td>
                                    <button onClick={() => handleDeleteOrder(order?._id)} className="btn btn-danger"><i className="fas fa-trash-alt"></i> DELETE</button>
                                </td>
                            </tr>)
                    }

                </tbody>
            </Table>



        </div>
    );
};

export default MyOrders;