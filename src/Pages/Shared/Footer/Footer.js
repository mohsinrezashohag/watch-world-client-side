import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Footer.css'

const Footer = () => {



    return (
        <div className="footer">

            <div className="container-fluid text-center text-md-left container">
                <div className="row">


                    <div className="col-md-6 pe-sm-5 mt-3 text-white ">
                        <div className="footer-left p-4">
                            <img className='logo' src={logo} alt="" />

                            <h5 style={{ textAlign: 'left' }} className="sub-heading mt-2">BOOST BRAINPOWER WITH MUSIC. FROM ANYWHERE.</h5>

                            <p className="footer-p">Music Land is the world’s leading provider of music-based education for children from birth through age seven. <br /> We use the power and joy of </p>
                        </div>




                    </div>


                    <div className="col-md-3  mb-3">
                        <h5 style={{ textAlign: 'left' }} className="sub-heading mt-5 text-white">Your Needed Links</h5>


                        <div className="footer-links">


                            <Link to="/home" className=" nav-link">Home</Link>
                            <Link to="/packages" className=" nav-link">Packages</Link>
                            <Link to="/purchase" className=" nav-link">Purchase</Link>
                            <Link to="/manageOrders" className=" nav-link">Manage Orders</Link>
                            <Link to="/about" className=" nav-link">About</Link>



                        </div>
                    </div>


                    <div className="col-md-3  mb-3">
                        <h5 style={{ textAlign: 'left' }} className="sub-heading mt-5 text-white">Follow Us</h5>


                        <div className="footer-links">



                            <a className="btn btn-primary" style={{ backgroundColor: '#55acee' }} href="#!" role="button"
                            ><i className="fab fa-facebook-f"></i><span className="badge bg-danger ms-2">8</span></a
                            >

                            <button
                                type="button"
                                className="btn btn-primary position-relative mx-4"
                                data-mdb-ripple-unbound="true"
                                style={{ backgroundColor: '#55acee' }}
                            >
                                <i className="fab fa-instagram"></i>
                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                >+99 <span className="visually-hidden">unread messages</span></span
                                >
                            </button>





                        </div>

                        <div className="text-white" style={{ textAlign: 'left' }}>
                            <h5 style={{ textAlign: 'left' }} className="sub-heading mt-5 text-white">Contact Details</h5>
                            <p>   Email : rezatravels@gmail.com</p>
                            <p> Location : Islampur-College Mor,JamalPur</p>

                        </div>



                    </div>






                </div>
            </div>
        </div >
    );
};

export default Footer;