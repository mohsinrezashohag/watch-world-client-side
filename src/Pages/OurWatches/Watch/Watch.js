import React from 'react';
import './Watch.css'

const Watch = (props) => {

    const { name, price, img, description } = props.watch
    return (
        <div className="m-4 single-watch">


            <img className="img-fluid watch-image" src={img} alt="" />

            <div className="watch-text">
                <h2>{name}</h2>
                <h4>Price : {price} $</h4>
                <p>{description?.slice(0, 150)}</p>

            </div>

            <div>
                <button className="m-4 see-book-btn"> SEE & BOOK <i className="fas fa-arrow-alt-circle-right"></i></button>
            </div>

        </div >
    );
};

export default Watch;