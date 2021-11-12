import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        const review = data;

        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);

            })

        console.log(data)

    };

    return (
        <div className='p-5 mt-5'>


            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='input-field' {...register("reviewProvider")} defaultValue={user.displayName} />
                <input className='input-field' {...register("feedback")} placeholder="Write your opinion about us " />
                <input className='input-field' type="number" {...register("rate", { min: 0, max: 5 })} />

                <input className='input-field' type="submit" />
            </form>

        </div>


    );
};

export default Review;