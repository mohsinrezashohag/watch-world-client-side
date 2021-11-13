import React from 'react';
import Rating from 'react-rating'
import './SingleReview.css'

const SingleReview = (props) => {
    const review = props.review


    return (
        <div className='m-4 single-review'>
            <h6>Client Name : {review?.reviewProvider}</h6>
            <p>Feedback : {review?.feedback}</p>



            <div className='d-flex'>
                <p>Given Ratting : </p>
                <Rating
                    className='ms-2'
                    initialRating={review?.rate}

                    emptySymbol="fa fa-star-o fa text-warning "
                    fullSymbol="fa fa-star fa text-warning"
                >
                </Rating>
            </div>


        </div>
    );
};

export default SingleReview;