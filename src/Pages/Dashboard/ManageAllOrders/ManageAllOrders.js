import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useRouteMatch, Route } from 'react-router-dom';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    const [isDeleted, setIsDeleted] = useState(null)


    useEffect(() => {

        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [isDeleted])




    const handleDeleteOrder = (id) => {
        const isConfirm = window.confirm("⛔⛔ Are You Sure About Delete This Order ?")
        if (isConfirm) {
            fetch(`http://localhost:5000/ordersDelete/${id}`, {
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


    console.log(orders);

    return (
        <div>
            <h2 className="section-heading">Manage All Orders</h2>
            <p className="sub-heading">Total orders  : {orders.length}</p>





            <div className="container">




                <Table className="table table-bordered border-secondary ">
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
                                                <button onClick={() => handleDeleteOrder(order?._id)} className="btn btn-danger"><i className="fas fa-trash-alt"></i> DELETE</button>
                                            </div>

                                            <div>
                                                <Link to={`/updateOrder/${order._id}`}>  <button className="btn btn-success"><i className="fas fa-edit"></i> Update</button> </Link>
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