import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {

        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])


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
                                        <button className="btn btn-danger"><i className="fas fa-trash-alt"></i> DELETE</button>
                                        <Link to="/home">  <button className="btn btn-success"><i className="fas fa-edit"></i> Update</button> </Link>
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