import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProducts = () => {

    const [watches, setWatches] = useState([])

    useEffect(() => {
        fetch('https://hidden-tor-06620.herokuapp.com/watches')
            .then(res => res.json())
            .then(data => {
                setWatches(data)
            })

    }, [])


    return (
        <div>
            <h2>Manage Products</h2>
            {watches.length}


            <div>

                <table style={{ textAlign: 'left' }} className="table bg-white rounded shadow-sm  table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Watch Name</th>
                            <th scope="col">Ordered By</th>
                            <th scope="col">Status</th>
                            <th scope="col">Delete Or Modify</th>
                        </tr>
                    </thead>
                    <tbody>


                        {watches.map(watch =>


                            <tr key={watch?._id}>
                                <td>{watch?.name}</td>
                                <td>{watch?.email}</td>


                                <td>{watch?.status === "Pending" ? <p className="text-danger">Pending</p> : <p className="text-success">Approved</p>}</td>




                                <td className='d-flex'>

                                    <div className='me-3' >
                                        <button className="btn btn-danger"><i className="fas fa-trash-alt"></i> DELETE</button>
                                    </div>

                                    <div>
                                        <Link to={`/updateOrder/${watch._id}`}>  <button className="btn btn-success"><i className="fas fa-edit"></i> Update</button> </Link>
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