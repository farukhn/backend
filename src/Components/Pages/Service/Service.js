import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import 'react-photo-view/dist/react-photo-view.css';
import './Service.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
const Service = ({ service }) => {
    const { name, _id, image, price, ratings, details } = service;
    return (
        <div className='col-lg-4'>
            <div className='service-img py-3'>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} className="w-100 img-fluid" alt="" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className='service-desc'>
                <p>{name}</p>
            </div>
            <div className='service-price d-flex justify-content-between'>
                <p>Price : {price}</p>
                <p className='d-flex align-items-center'>Ratings : {[...Array(ratings).keys()].map(s => <FaStar key={s} className='ratings' />)}</p>
            </div>
            <div className="service-details">
                {
                    details.length > 100 ? <p>{details.slice(0, 100) + '....'}</p> : <p>{details}</p>
                }
            </div>
            <button className='service-btn my-3'><Link to={`/details/${_id}`}>See Details</Link></button>
                
        </div>
    );
};

export default Service;