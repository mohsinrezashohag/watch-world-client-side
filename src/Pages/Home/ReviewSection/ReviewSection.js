import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';
import './ReviewSection.css'

const ReviewSection = () => {


    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://hidden-tor-06620.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })

    }, [])




    return (

        <div className="packages">
            <h2 className="section-heading">Our Clients Feedback</h2>
            <h5 className='sub-heading'>Have a look on our clients Feedback</h5>




            <div className='review-grid container'>

                {reviews.map(review =>

                    <SingleReview key={review._id} review={review}></SingleReview>

                )}

            </div>



        </div>
    );
};

export default ReviewSection;