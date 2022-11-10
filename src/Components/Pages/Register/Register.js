import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import registerImg from '../../Assets/register.svg'
import googleImg from '../../Assets/icons/google.png'
import { useContext } from 'react';
import { AuthenticationContext } from '../../AuthContext/AuthContext';
import toast from 'react-hot-toast';
import useTitle from '../../Utilities/DynamicTitle/DynamicTitle';
const Register = () => {
    // dynamic title
    useTitle('register')
    const { signUpUser, updateUserProfile, googleSignIn } = useContext(AuthenticationContext);
    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        const name = form.name.value;
        signUpUser(email, password)
            .then(res => {
                toast.success('Registration Successfull')
                updateUserProfile(name, photoUrl)
                    .then(res => {
                        toast.success('Name Updated')
                    });
                const user = {
                    email: res.user.email
                }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token)
                    })
            })
            .catch(err => toast.error(err.message))

    };
    // google signUp 
    const handleGoogle = () => {
        googleSignIn()
            .then(res => {
                toast.success('Login SuccessFully');
                const user = {
                    email: res.user.email
                }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token)
                    })
            })
            .catch(err => toast.err(err.message))

    }
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <h2 className='text-center'>Please Create An Account</h2>
                        <img src={registerImg} className="w-100" alt="" />
                    </div>
                    <div className="col-lg-4">
                        <div className='login-form px-2 py-3'>
                            <h3 className='text-center'>SIGN UP HERE </h3>
                            <div className='user-profile text-center'><FaUser /></div>
                            <form onSubmit={handleRegisterSubmit}>
                                <div>
                                    <input type="text" name='name' className='email w-100 mb-2' placeholder='Your Full Name' />
                                </div>
                                <div>
                                    <input type="email" name='email' className='email w-100  mb-2' placeholder='Your Email' />
                                </div>
                                <div>
                                    <input type="text" name='photoUrl' className='email w-100 mb-2' placeholder='Your Photo Link' />
                                </div>
                                <div>
                                    <input type="password" name='password' className='password w-100 mt-2 mb-2' placeholder='Your Password' />
                                </div>
                                <div className='py-2'>
                                    <button type='submit' className='login-btn '>Sign Up</button>
                                </div>
                            </form>
                            <p>Are You Already Registered ? Please <Link className='register-link' to='/login'>Login</Link></p>
                            <div className='mt-2'>
                                <button className='icon-border px-3 py-2' onClick={handleGoogle} > <img src={googleImg} className="google-icon" alt="" />continue with google</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;