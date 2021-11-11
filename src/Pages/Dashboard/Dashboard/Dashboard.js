import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AddWatches from '../AddWatches/AddWatches';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import './Dashboard.css'


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();

    console.log(admin);

    return (
        <div>


            <div className="d-flex" id="wrapper">



                {/* <!-- Sidebar --> */}
                <div style={{ textAlign: 'left' }} className="bg-white" id="sidebar-wrapper">

                    <div className="list-group list-group-flush my-3 p-3">
                        <Link className="sidebar-link" to={`${url}`}>Dashboard</Link>






                        {admin ? <div style={{ display: 'flex', flexDirection: 'column' }}>

                            <Link className="sidebar-link" to={`${url}/manageAllOrders`}>Manage All Orders</Link>
                            <Link className="sidebar-link" to={`${url}/manageProducts`}>Manage Products</Link>
                            <Link className="sidebar-link" to={`${url}/AddWatches`}>Add A Watch</Link>
                            <Link className="sidebar-link" to={`${url}/makeAdmin`}>Make An Admin</Link>
                            <Button onClick={logOut} className="text-white logout-btn header-btn mt-2 ">Logout <i className="fas fa-sign-in-alt"></i> </Button>
                        </div>

                            :


                            <div style={{ display: 'flex', flexDirection: 'column' }}>

                                <Link to={`${url}/pay`}>Pay</Link>
                                <Link to={`${url}/myOrders`}>My Orders</Link>
                                <Link to={`${url}/review`}>Review</Link>
                                <Button onClick={logOut} className="text-white logout-btn header-btn mt-2 ">Logout <i className="fas fa-sign-in-alt"></i> </Button>

                            </div>

                        }




                    </div>


                </div>




                {/*  Page Content  */}

                <div id="page-content-wrapper">

                    <Switch>

                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>


                        <Route path={`${path}/pay`}>
                            <Payment></Payment>
                        </Route>

                        <Route path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>


                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>




                        {/* admin */}
                        <Route path={`${path}/manageAllOrders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </Route>

                        <Route path={`${path}/addWatches`}>
                            <AddWatches></AddWatches>
                        </Route>

                        <Route path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>

                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>




                    </Switch>


                </div>
            </div>
        </div >
    );
};

export default Dashboard;