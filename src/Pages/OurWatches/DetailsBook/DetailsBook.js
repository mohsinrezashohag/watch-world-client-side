import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './DetailsBook.css'


const DetailsBook = () => {

    const { user, setISloading } = useAuth();
    const history = useHistory();

    // loading the details
    const { id } = useParams();
    const [watch, setWatch] = useState([])
    useEffect(() => {
        fetch(`https://hidden-tor-06620.herokuapp.com/watches/${id}`)
            .then(res => res.json())

            .then(data => {
                setWatch(data)
            })
        setISloading(false)

    }, [])

    // const thisWatch = watches?.find(watch => watch._id === id)




    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        console.log(data);
        fetch('https://hidden-tor-06620.herokuapp.com/order', {
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



    };

    return (
        <div>

            <h2 className='section-heading'>See Your Interested Product & Place order</h2>
            <p className='sub-heading'>Place the order with valid credential & get product on hand within 3 working days</p>




            <div className="row mt-5">



                <div style={{ textAlign: 'left' }} className="col-md-7 p-3">

                    <div className='watch-details-box'>
                        <img className="mb-5" src={watch?.img} alt="" />
                        <h2>{watch?.name}</h2>
                        <p>{watch?.description}</p>
                    </div>

                </div>





                <div className="col-md-5">


                    {watch.name &&


                        <form onSubmit={handleSubmit(onSubmit)}>


                            <input className='input-field' {...register("email")} defaultValue={user.email} />

                            <br />

                            <input className='input-field' {...register("watchName")} defaultValue={watch?.name} />



                            < br />

                            <select className='input-field' {...register("status")} hidden>

                                <option value="Pending">Pending</option>

                                <option value="Shipped">Shipped</option>

                            </select>

                            <br />

                            <input type="submit" />
                        </form>

                    }

                </div>









            </div>

        </div>
    );
};

export default DetailsBook;