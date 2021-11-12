import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './DashBoardHome.css'

const DashboardHome = () => {

    const { user, admin } = useAuth();
    const [orders, setOrders] = useState([])
    const [isDeleted, setIsDeleted] = useState(null)

    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        fetch('https://hidden-tor-06620.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data)
            })


    }, [isDeleted])





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
        <div className="container-fluid px-4">
            <div className="row g-3 my-2">
                <div className="col-md-12">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">

                        {admin ?

                            <div>
                                <h3 className="fs-5">Total Orders By Users</h3>
                                <p className="fs-1">{allOrders?.length}</p>
                            </div>

                            :

                            <div>
                                <h3 className="fs-5">My Total Orders</h3>
                                <p className="fs-1">{orders?.length}</p>
                            </div>

                        }

                        <Link to='/ourWatches'>
                            <button className="btn btn-success">Order More Watches</button>
                        </Link>

                    </div>
                </div>





            </div>




            <div className="row my-5">
                <h3 className="fs-4 mb-3">Recent Orders</h3>
                <div style={{ textAlign: 'left' }} className="col">





                    {admin ?

                        <div>

                            <table className="table bg-white rounded shadow-sm  table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Ordered Watch Name</th>
                                        <th scope="col">Ordered By</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Delete Or Modify</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {allOrders.map(order =>


                                        <tr key={order?._id}>
                                            <td>{order?.watchName}</td>
                                            <td>{order?.email}</td>


                                            <td>{order?.status === "Pending" ? <p className="text-danger">Pending</p> : <p className="text-success">Approved</p>}</td>




                                            <td className='d-flex'>

                                                <div className='me-3' >
                                                    <button onClick={() => handleDeleteOrder(order?._id)} className="btn btn-danger"><i className="fas fa-trash-alt"></i> DELETE</button>
                                                </div>

                                                <div>
                                                    <Link to={`/updateOrder/${order._id}`}>  <button className="btn btn-success"><i className="fas fa-edit"></i> Update</button> </Link>
                                                </div>


                                            </td>

                                        </tr>

                                    )}

                                </tbody>
                            </table>

                        </div>



                        :
                        <div>

                            <table className="table bg-white rounded shadow-sm  table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Ordered Watch Name</th>
                                        <th scope="col">Status</th>
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
                        </div>
                    }













                    {admin ?

                        <Link to='/dashboard/manageAllOrders'>
                            <button className="btn btn-success">Manage All Orders</button>
                        </Link> :

                        <Link to='/dashboard/myOrders'>
                            <button className="btn btn-success">See All Of Your Orders</button>
                        </Link>}






                </div>
            </div>

        </div >
    );
};

export default DashboardHome;