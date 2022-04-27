/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
    createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import './firebase';

function Apps() {
    const auth = getAuth();
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const handleInputs = (event) => {
        const inputs = { [event.target.name]: event.target.value };

        setData({ ...data, ...inputs });
    };
    const addData = () => {
        signInWithEmailAndPassword(auth, data.email, data.password);
    };
    const createUser = () => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in
                const { user } = userCredential;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };
    const handleLogout = () => {
        signOut(auth);
        console.log('logOUt');
    };

    useEffect(() => {
        onAuthStateChanged(auth, (credential) => {
            if (credential) {
                console.log('Logged In');
                console.log(credential.email);
            } else {
                console.log('Not Logged In');
            }
        });
    }, [auth]);
    return (
        <div>

            <label htmlFor="email" />
            <input type="email" className="email" name="email" onChange={handleInputs} placeholder="email" />
            <label htmlFor="password" />
            <input type="password" name="password" onChange={handleInputs} placeholder="password" />

            <button type="button" onClick={createUser}> Create account</button>
            <button type="button" onClick={addData}>Log In</button>
            <button type="button" onClick={handleLogout}>Log out</button>

        </div>
    );
}

export default Apps;
