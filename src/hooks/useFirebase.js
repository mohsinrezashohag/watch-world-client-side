import firebaseInitializeApplication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";



firebaseInitializeApplication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setISloading] = useState(true);

    const auth = getAuth();



    // Sign Up With Email Password
    const signUpWithEmailPassword = (email, password) => {
        setISloading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // log in with email and password
    const signInWithEmailPassword = (email, password) => {
        setISloading(true)

        return signInWithEmailAndPassword(auth, email, password)

    }


    // look over to the  current user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setISloading(false)
        });
    }, [auth])


    // log out
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
    }




    return {
        user,
        setUser,
        signUpWithEmailPassword,
        signInWithEmailPassword,
        error,
        setError,
        logOut,
        isLoading,
        setISloading,

    }

}

export default useFirebase;