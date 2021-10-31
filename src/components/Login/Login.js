import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { getAuth } from "firebase/auth";

import useAuth from '../../hooks/useAuth';



const Login = () => {


    const { signInUsingGoogle } = useAuth();


    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const [isLogIn, setIsLogIn] = useState(false);


    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'





    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })

    }


    const handleRegistration = (e) => {
        e.preventDefault();

        if (password.length < 6) {
            setError('Password should be at least 6 characters')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain 2 uppercae');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Password must contain 1 special character');
            return;
        }
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Password must contain 2 digits');
            return;
        }
        if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
            setError('Password must contain 3 lowercase');
            return;
        }



        isLogIn ? processLogIn(email, password) : createNewUser(name, email, password);

    }


    const processLogIn = (email, password) => {
        const testAuth = getAuth();

        signInWithEmailAndPassword(testAuth, email, password)
            .then((userCredential) => {
                history.push(redirect_uri)

                // const user = userCredential.user;
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const createNewUser = (displayName, email, password) => {

        const testAuth = getAuth();


        createUserWithEmailAndPassword(testAuth, email, password)
            .then((userCredential) => {
                history.push(redirect_uri)

                // const user = userCredential.user;



                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }






    const handleResetPassword = () => {
        const testAuth = getAuth();

        sendPasswordResetEmail(testAuth, email)
            .then(() => {

            })
            .catch((error) => {
                setError(error.message);


            });
    }


    const toggleLogIn = e => {
        // console.log(e.target.checked)
        setIsLogIn(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className=" container mx-auto px-5 py-8 flex items-center  justify-center flex-col ">
            <form className='container mt-5 object-center w-1/3  text-left' onSubmit={handleRegistration}>
                <h3 className="text-green-700 font-bold text-xl"> {isLogIn ? 'Sign in to your account' : 'Sign up a new account'}</h3>
                {!isLogIn && <div className="row mb-3">
                    <label htmlFor="inputAddress" className="justify-left">Name</label>
                    <div className="col-sm-10">
                        <input onBlur={handleNameChange} type="text" className="border-1 border-green-300 w-full rounded" id="inputAddress" placeholder="type your name" />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="border-1 border-green-300 w-full rounded" id="inputEmail3" required placeholder="type your email" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="border-1 border-green-300 w-full rounded" id="inputPassword3" required placeholder="type your password" />
                        <div className=" my-3 text-red-500 font-bold">{error}</div>
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <label className="form-check-label mr-3" htmlFor="gridCheck1">
                                Already have an account
                            </label>
                            <input onChange={toggleLogIn} className="form-check-input" type="checkbox" id="gridCheck1" />

                        </div>
                    </div>
                </div>
                <button type="submit" className="bg-green-200 my-2 px-4 py-2">{isLogIn ? 'Sign in' : 'Register'}</button>
                <br />
                <button onClick={handleResetPassword} type="button" className=" text-blue-400 my-2">Forgot your password?</button>

            </form>
            <div>Or</div>
            <button onClick={handleGoogleSignIn} className="bg-yellow-300 px-3 py-2 my-2">Google Sign In</button>


        </div>
    );
}


export default Login;
