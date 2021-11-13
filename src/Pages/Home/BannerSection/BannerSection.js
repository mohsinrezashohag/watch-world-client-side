import React from 'react';
import Jump from 'react-reveal/Jump';
import Tada from 'react-reveal/Tada';
import { NavLink } from 'react-router-dom';
import './BannerSection.css'



const BannerSection = () => {
    return (
        <div className="banner p-sm-5 ">
            <div className="row d-md-flex align-items-center ">

                <div className="col-md-6">
                </div>

                <div className="col-md-6 p-4 banner-text banner-text-part">
                    <Jump>
                        <h1>Pick The Unique Watch <span className="special-text">That Fits Your Style  </span> </h1>
                        <p>We are a team of traveler, explorer and entrepreneur who work together
                            <br />
                            to ensure a great tour  that you receive the best treatment to your soul because we bellive only travels can heal you the inside.</p>
                        <Tada>
                            <NavLink to="/ourWatches"><button className="have-look-btn">Have a Look To Our Exclusive Watches</button></NavLink>
                        </Tada>
                    </Jump>
                </div>

            </div>
        </div>
    );
};

export default BannerSection;