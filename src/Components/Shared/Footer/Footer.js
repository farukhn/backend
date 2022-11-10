import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <div className='footer py-3'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 ">
                            <p className='footer-text text-center'><Link to='/home'>Home</Link></p>
                            <p className='footer-text text-center'><Link to='/login'>Login</Link></p>
                            <p className='footer-text text-center'><Link to='/register'>Register</Link></p>

                        </div>
                        <div className="col-lg-4">
                            <p className='footer-text text-center'><Link to='/blog'>Blog</Link></p>
                            <p className='footer-text text-center'><Link to='/addservice'>Add Service</Link></p>
                            <p className='footer-text text-center'><Link to='/myreviews'>My Reviews</Link></p>
                        </div>
                        <div className="col-lg-4 d-flex">
                            <input type="text" className='w-75 py-3 border-0' placeholder='write your email'  />
                            <button className='subscribe-btn'>Subscribe</button>
                        </div>
                        <p className='text-center text-white my-2'>&#169;Copyright 2022 Md Fahim Muntasir Orin </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;