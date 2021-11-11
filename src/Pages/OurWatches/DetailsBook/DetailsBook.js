import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const DetailsBook = () => {

    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();



    const onSubmit = data => {

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    alert("Order Placed Successfully ✅✅✅")
                    history.push('/dashboard')
                }

            })
        console.log(data);

    };



    // loading the details
    const { id } = useParams();
    const [watches, setWatches] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/watches')
            .then(res => res.json())
            .then(data => {
                setWatches(data)
            })

    }, [reset])

    const thisWatch = watches.find(watch => watch._id === id)



    return (
        <div>

            <h2 className='section-heading'>See Your Interested Product & Place order</h2>
            <p className='sub-heading'>Place the order with valid credential & get product on hand within 3 working days</p>

            <div className="row mt-5">




                <div className="col-md-6">

                    <img className="mb-5" src={thisWatch?.img} alt="" />
                    <h2>{thisWatch?.name}</h2>
                    <p>{thisWatch?.description}</p>
                </div>






                <div className="col-md-6">

                    <form onSubmit={handleSubmit(onSubmit)}>


                        <input className="p-3 border-3 mt-4" {...register("email", { required: true })} defaultValue={user.email} />
                        <br />
                        <input className="p-3 border-3 mt-4" {...register("watchName", { required: true })} defaultValue={thisWatch?.name} />
                        <br />
                        <select className="p-3 border-3 mt-4" {...register("status", { required: true })}  >

                            <option value="Pending">Pending</option>

                            <option value="Shipped">Shipped</option>

                        </select>

                        <br />


                        <input className="submit-btn mt-3" type="submit" />


                    </form>

                </div>









            </div>

        </div>
    );
};

export default DetailsBook;