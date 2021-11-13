import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useRouteMatch, Route } from 'react-router-dom';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)


    useEffect(() => {

        fetch('https://hidden-tor-06620.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [isDeleted])




    const handleDeleteOrder = (id) => {
        const isConfirm = window.confirm("⛔⛔ Are You Sure About Delete This Order ?")
        if (isConfirm) {
            fetch(`https://hidden-tor-06620.herokuapp.com/ordersDelete/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setIsDeleted(!isDeleted)
                    }
                })
        }

    }


    console.log(orders);

    return (
        <div>
            <h2 className="section-heading">Manage All Orders</h2>
            <p className="sub-heading">Total orders  : {orders.length}</p>





            <div className="container">




                <Table className="table table-bordered border-secondary" style={{ textAlign: 'left' }}>
                    <thead>
                        <tr>

                            <th>watch Name</th>
                            <th>Orderer Email</th>
                            <th>Status</th>
                            <th>Cancel/Modify</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            orders.map(order =>
                                <tr key={order?._id}>
                                    <td>{order?.watchName}</td>
                                    <td>{order?.email}</td>
                                    <td>{order?.status === "Pending" ? <p className="text-danger">Pending</p> : <p className="text-primary">Approved</p>}</td>
                                    <td>

                                        <td className='d-flex'>

                                            <div className='me-3' >
                                                <button onClick={() => handleDeleteOrder(order?._id)} className="btn btn-danger"><i className="fas fa-trash-alt"></i> Cancel Order</button>
                                            </div>

                                            <div>
                                                <Link to={`/order/${order._id}`}>  <button className="btn btn-success"><i className="fas fa-edit"></i>Approve Order</button> </Link>
                                            </div>


                                        </td>




                                    </td>
                                </tr>)
                        }

                    </tbody>
                </Table>

            </div>



        </div>
    );
};

export default ManageAllOrders;