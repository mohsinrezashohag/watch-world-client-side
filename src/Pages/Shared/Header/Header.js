import React from 'react';
import { Button, Container, DropdownButton, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../images/logo.png'
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <div >
            <Navbar collapseOnSelect expand="lg" id="navbar" style={{ textAlign: 'center' }}>
                <Container>
                    <Link to="/" className="navbar-brand text-white"><img width="70px" src={logo} alt="" /></Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">



                            <Link to="/home" className=" nav-link">Home</Link>
                            <Link to="/ourWatches" className=" nav-link">All Watches</Link>
                            <Link to="/dashboard" className=" nav-link">My Dashboard</Link>

                            {/* <Link to="/packages" className=" nav-link">Packages</Link>
                            <Link to="/manageOrders" className=" nav-link">Manage Orders</Link>
                            <Link to="/addPackage" className=" nav-link">Add New Package</Link>
                            <Link to="/about" className=" nav-link">About</Link> */}






                        </Nav>



                        <Nav>





                            {/* 
                            <DropdownButton className="mx-1 my-1" id="dropdown-basic-button" title="See More">

                            </DropdownButton> */}

                            {user?.email ?
                                <Button onClick={logOut} className="text-white logout-btn header-btn mt-2 ">Logout <i className="fas fa-sign-in-alt"></i> </Button>
                                :
                                <Link to="/login" className="nav-link">
                                    <Button className="text-white header-btn">Login <i className="fas fa-user-plus"></i> </Button>
                                </Link>}








                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;