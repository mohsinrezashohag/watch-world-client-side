import React from 'react';
import { Link } from 'react-router-dom';
import './Watch.css'

const Watch = (props) => {

    const { _id, name, price, img, description } = props.watch
    return (
        <div className="m-4 single-watch">


            <img className="watch-image" src={img} alt="" />

            <div className="watch-text">
                <h2>{name}</h2>
                <h4>Price : {price} $</h4>
                <p>{description?.slice(0, 150)}</p>

            </div>

            <div>
                <Link to={`watch/${_id}`}><button className="m-4 see-book-btn"> SEE & BOOK <i className="fas fa-arrow-alt-circle-right"></i></button></Link>
            </div>

        </div >
    );
};

export default Watch;