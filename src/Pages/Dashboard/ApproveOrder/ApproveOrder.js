import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './ApproveOrder.css'

const ApproveOrder = () => {
    const [order, setOrder] = useState([])
    // const [updatedOrder, setUpdatedOrder] = useState([])
    const { id } = useParams();
    const { user } = useAuth();
    const history = useHistory();


    useEffect(() => {
        fetch(`https://hidden-tor-06620.herokuapp.com/order/${id}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
            })

    }, [id])


    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);


        fetch(`https://hidden-tor-06620.herokuapp.com/modifyOrder/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                alert('Order Status Updated ✅✅')
                history.push('/dashboard')

            })

    };




    // load single order by id


    return (
        <div>
            <h2 className='section-heading'>Update Users Order</h2>
            <h5 className='sub-heading'>Approved Or cancel Orders given my Users</h5>
            {order?.watchName &&

                <form className='update-form' onSubmit={handleSubmit(onSubmit)}>


                    <input className='input-field' {...register("email")} defaultValue={order?.email} />

                    <br />

                    <input className='input-field' {...register("watchName")} defaultValue={order?.watchName} required />



                    < br />

                    <select className='input-field' {...register("status")} >

                        <option value="Pending">Pending</option>

                        <option value="Shipped">Shipped</option>

                    </select>

                    <br />

                    <input className="btn btn-success text-white header-btn" type="submit" />
                </form>





            }


            <div className='m-5'>
                <Link to='/dashboard'>   <Button className="btn btn-success text-white header-btn">Go Back To Dashboard </Button></Link>
            </div>


        </div>
    );
};

export default ApproveOrder;