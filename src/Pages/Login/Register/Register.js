import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');

    const history = useHistory();
    const Location = useLocation();
    const redirect_url = Location?.state?.from || '/'


    const { error, setError, signUpWithEmailPassword, setUser, setISloading } = useAuth();

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePasswordOne = e => {
        setPasswordOne(e.target.value)
    }
    const handlePasswordTwo = e => {
        setPasswordTwo(e.target.value)
    }



    const handleRegisterUser = (e) => {
        if (passwordOne === passwordTwo) {
            const user = { email: email, password: passwordOne }
            signUpWithEmailPassword(user.email, user.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setUser(user)
                    setISloading(false)
                    history.push(redirect_url)

                })
                .catch((error) => {
                    setError(error.message);
                });


            console.log(user);
        }
        else {
            setError("Password didn't matched ⛔")
        }
        e.preventDefault();
    }





















    return (
        <div className="p-5">
            <h2>Register Page</h2>


            <form className="m-5" onSubmit={handleRegisterUser}>

                {error}

                <br />

                <input onBlur={handleEmail} className="p-3 border-3 mt-4" type="email" placeholder="Email : " />
                <br />

                <input onBlur={handlePasswordOne} className="p-3 border-3 mt-4" type="password" placeholder="Password : " />

                <br />
                <input onBlur={handlePasswordTwo} className="p-3 border-3 mt-4" type="password" placeholder="Confirm Password : " />

                <br />


                <button className='mt-3 mb-3' type='submit'>Register Now</button>
                <br />

                <Link to='/login'>Already Have Account ?</Link>

            </form>


        </div>
    );
};

export default Register;