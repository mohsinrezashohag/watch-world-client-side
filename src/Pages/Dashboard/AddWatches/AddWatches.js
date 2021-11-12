import React from 'react';
import { useForm } from 'react-hook-form';

const AddWatches = () => {

    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        const newWatch = data;
        console.log(newWatch);
        fetch('http://localhost:5000/addWatches', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newWatch)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged === true) {

                    alert("Watch Added Successfully")

                    reset()
                }
            })


    };




    return (
        <div className="p-5">
            <h2 className="section-heading">Add a new watch</h2>

            <div className="package-add text-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="p-3 border-3 mt-4 me-2" placeholder="Watch Name :" {...register("name")} />

                    <input className="p-3 border-3 mt-4" placeholder="Price :" type="number" {...register("price")} />
                    <br />



                    <input className="p-3 border-3 mt-4 me-2" placeholder="Details :" {...register("description")} />


                    <input className="p-3 border-3 mt-4 mb-3" placeholder="Image URL :" {...register("img")} />

                    <br />
                    <input className="add-pack-btn" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddWatches;