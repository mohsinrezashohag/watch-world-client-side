import React from 'react';
import './DashBoardHome.css'

const DashboardHome = () => {
    return (
        <div className="container-fluid px-4">
            <div className="row g-3 my-2">
                <div className="col-md-6">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <h3 className="fs-2">720</h3>
                            <p className="fs-5">Products</p>
                        </div>
                        <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <h3 className="fs-2">4920</h3>
                            <p className="fs-5">Sales</p>
                        </div>
                        <i
                            className="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
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
                            <tr>
                                <td>Television</td>
                                <td>Jonny</td>
                                <td>$1200</td>
                            </tr>
                            <tr>
                                <td>Laptop</td>
                                <td>Kenny</td>
                                <td>$750</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default DashboardHome;