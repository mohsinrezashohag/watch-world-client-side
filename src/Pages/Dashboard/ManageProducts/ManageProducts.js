import React, { useEffect, useState } from 'react';

const ManageProducts = () => {

    const [watches, setWatches] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)

    useEffect(() => {
        fetch('https://hidden-tor-06620.herokuapp.com/watches')
            .then(res => res.json())
            .then(data => {
                setWatches(data)
            })

    }, [isDeleted])

    const handleDeleteWatch = (id) => {

        const confirmDelete = window.confirm("Are You Confirm About This Deletion ⛔⛔?")
        if (confirmDelete) {

            fetch(`https://hidden-tor-06620.herokuapp.com/deleteWatch/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setIsDeleted(!isDeleted)
                    }
                })
        }

    }



    return (
        <div>
            <h2 className='section-heading'>Manage All Available Products </h2>
            <h5 className='sub-heading'>{watches.length} Products Available On Store </h5>


            <div>

                <table style={{ textAlign: 'left', width: '90%', margin: '0px auto', padding: '10px' }} className="table bg-white rounded shadow-sm  table-hover ">
                    <thead>
                        <tr>
                            <th scope="col">Watch Name</th>
                            <th scope="col">Delete Products</th>
                        </tr>
                    </thead>
                    <tbody>


                        {watches.map(watch =>


                            <tr key={watch?._id}>
                                <td>{watch?.name}</td>






                                <td className='d-flex'>

                                    <div className='me-3' >
                                        <button onClick={() => handleDeleteWatch(watch._id)} className="btn btn-danger"><i className="fas fa-trash-alt"></i> DELETE </button>
                                    </div>



                                </td>

                            </tr>

                        )}

                    </tbody>
                </table>

            </div>


        </div>
    );
};

export default ManageProducts;