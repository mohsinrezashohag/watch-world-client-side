import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './DashBoardHome.css'

const DashboardHome = () => {

    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    const [isDeleted, setIsDeleted] = useState(null)


    const email = user.email;
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then(res => res.json())
            .then(data => {

                setOrders(data)
            })
    }, [email, isDeleted])


    const handleDeleteOrder = (id) => {
        const isConfirm = window.confirm("⛔⛔ Are You Sure About Delete This Order ?")
        if (isConfirm) {
            fetch(`http://localhost:5000/mayOrders/${id}`, {
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
        <div className="container-fluid px-4">
            <div className="row g-3 my-2">
                <div className="col-md-12">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <h3 className="fs-5">Total Orders</h3>
                            <p className="fs-1">{orders?.length}</p>
                        </div>

                        <Link to='/ourWatches'>
                            <button className="btn btn-success">Order More Watches</button>
                        </Link>

                    </div>
                </div>





            </div>




            <div className="row my-5">
                <h3 className="fs-4 mb-3">Recent Orders</h3>
                <div style={{ textAlign: 'left' }} className="col">
                    <table className="table bg-white rounded shadow-sm  table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Ordered Watch Name</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>


                            {orders.map(order =>


                                <tr key={order?._id}>
                                    <td>{order?.watchName}</td>


                                    <td>{order?.status === "Pending" ? <p className="text-danger">Pending</p> : <p className="text-success">Approved</p>}</td>




                                    <td><button onClick={() => handleDeleteOrder(order?._id)} className="btn btn-danger"><i className="fas fa-trash-alt"></i> DELETE</button></td>

                                </tr>

                            )}

                        </tbody>
                    </table>


                    <Link to='/dashboard/myOrders'>
                        <button className="btn btn-success">See All Of Your Orders</button>
                    </Link>

                </div>
            </div>

        </div >
    );
};

export default DashboardHome;