import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaChevronRight, FaFolderOpen, FaHome, FaMortarPestle, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useTitle from '../../Utilities/DynamicTitle/DynamicTitle';
import Service from '../Service/Service';
import cooking from '../../Assets/cooking.jpeg'
import './Home.css'

const Home = () => {
    // dynamic title
    useTitle('Home')
    const [services, setServices] = useState([])
    console.log(services)
    useEffect(() => {
        fetch('http://localhost:5000/homeservice')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="banner py-5 px-4">
                        <div className='banner-text col-lg-6 py-5'>
                            <h1 className='py-5 text-white'>Show Our Best Services Food To Discover Your New Health</h1>
                            <p className='text-white'>, Nutritious Food For Everyone, In A Sustainable And Affordable Manner. Discover The Latest Trends And Innovations For A Sustainable Future. Find Out More! UK. Charity No. 1040519. Join Our Movement. International Non-Profit. Support Our Work.</p>
                            <button className='banner-btn'><Link to='/services'>Explore Our Services</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className='text-center py-3'>Explore Our Service</h2>
                <div className="row">
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <div className="col-lg-4 text-center">
                                    <button className='banner-btn'><Link to='/services'>View All Services <FaChevronRight></FaChevronRight> </Link></button>
                                </div>
                                <div className="col-lg-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us section  */}
            <div className='custom-bg mt-4'>
                <div className="container ">
                    <div className="row py-5">
                        <h1 className='text-center py-3 text-white'>About Us </h1>
                        <div className="col-lg-4">
                            <p className='text-center'><FaFolderOpen className='about-icon' /></p>
                            <h4 className='text-white text-center my-4'>Our History</h4>
                            <p className=' text-white'>Early human nutrition was largely determined by the availability and palatability of foods.[2] Humans evolved as omnivorous hunter-gatherers, though the diet of humans has varied significantly depending on location and climate</p>
                        </div>
                        <div className="col-lg-4">
                            <p className='text-center'><FaHome className='about-icon' /></p>
                            <h4 className='text-white text-center'>Our Mission</h4>
                            <p className='text-white mt-4'>A restaurant’s mission, vision, and values make up part of your brand’s identity. They fuel business decisions while inspiring customers to frequent and employees to work for your restaurant. Creating a mission statement for your restaurant can help you think critically about your goals, beyond serving delicious food.</p>
                        </div>
                        <div className="col-lg-4">
                            <p className='text-center'><FaUser className='about-icon'></FaUser></p>
                            <h4 className='text-white text-center'>Our vision</h4>
                            <p className='text-white mt-4'>Vision statements are often matched with company values and/or a vision. Together, a mission, vision, and values describe what your restaurant stands for. In other words, they collectively serve as a compass for your business, guiding you towards your north star – the goals that you hope to achieve through your restaurant.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h1 className='text-center py-3'>Explore My Expert Skills </h1>
                <div className="row py-3 align-items-center">
                    <div className="col-lg-6 py-2">
                        <img src={cooking} className="w-100 img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 py-2">
                        <div className='expert '>
                           <div className='text-center'>
                           <FaMortarPestle className='expert-icon'></FaMortarPestle>
                           </div>
                            <h3>1.GOOD COOKING </h3>
                            <h3>2.DELIVER FOOD ON TIME </h3>
                            <h3>3.FRESH AND FULLY HAND MADE</h3>
                            <h3>4.CLEAN AND FRESH ENVIRONMENT</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;