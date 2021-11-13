import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'
import './Footer.css'

const Footer = () => {
    const { user } = useAuth();


    return (
        <div className="footer">

            <div className="container-fluid text-center text-md-left container">
                <div className="row">


                    <div className="col-md-6 pe-sm-5 mt-3 text-white ">
                        <div className="footer-left p-4">
                            <img className='logo' src={logo} alt="" />

                            <div style={{ textAlign: 'left' }}>

                                <h5 className="sub-heading mt-2">Pick The Unique Watch That Fits Your Style

                                    <br />

                                    With smartwatch you can easily make calls and messages without your phone. Smartwatches let you count on your fitness goals. It can count steps,calories, heart rate, pulse rate, sleep, distance etc.When you get on the road there are a number of routes to different locations which often confuses you for the route to your destination. But thanks to our technology, these days we can easily know the routes by using maps and GPS systems.

                                </h5>



                            </div>
                        </div>




                    </div>


                    <div className="col-md-3  mb-3">
                        <h5 style={{ textAlign: 'left' }} className="sub-heading mt-5 text-white">Your Needed Links</h5>


                        <div className="footer-links">


                            <Link to="/home" className=" nav-link">Home</Link>
                            <Link to="/ourWatches" className=" nav-link">Watches</Link>
                            <Link to="/about" className=" nav-link">About Us</Link>
                            {user && <Link to="/dashboard" className=" nav-link">Dashboard</Link>}





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
                                >+9 <span className="visually-hidden">unread messages</span></span
                                >
                            </button>





                        </div>

                        <div className="text-white mt-4" style={{ textAlign: 'left' }}>
                            <h5 >Contact Details</h5>
                            <div className='mt-4'>
                                <p> Email : watchworld@gmail.com</p>
                                <p> Location : Islampur-College Mor,JamalPur</p>
                            </div>

                        </div>



                    </div>






                </div>
            </div>
        </div >
    );
};

export default Footer;