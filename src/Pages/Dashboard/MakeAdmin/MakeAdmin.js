import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }


    const handleMakeAdmin = (e) => {
        const user = { email }
        console.log(user);
        fetch('https://hidden-tor-06620.herokuapp.com/makeAdmin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


        e.preventDefault();
    }


    return (
        <div className="p-5">
            <h2>Make Admin</h2>


            <form onSubmit={handleMakeAdmin}>

                <input onBlur={handleEmail} className="p-3 border-3 mt-4 mb-3" type="email" placeholder="Enter Desire Email : " />
                <br />

                <Button type="submit">Make Admin Now</Button>
            </form>

        </div>
    );
};

export default MakeAdmin;