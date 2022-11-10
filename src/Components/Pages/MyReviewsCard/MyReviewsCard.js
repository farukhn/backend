import React from 'react';
import { useContext } from 'react';
import { FaCheckCircle, FaStar, FaTimes, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthenticationContext } from '../../AuthContext/AuthContext';
import './MyReviewCard.css'
const MyReviewsCard = ({ reviewInfo, handleDelete }) => {
    const { user } = useContext(AuthenticationContext);
    const { email, productname, _id, review, userImage, userVerified, rating } = reviewInfo;
    return (
        <div className='col-lg-4 py-3'>
            <div className='review-card p-3'>
                <div className='review-img text-center'>
                    <img src={userImage} alt="" />
                </div>
                <div className='product-name py-3'>
                    <p className='m-0'>Product Name : {productname}</p>
                </div>
                <div className='product-name'>
                    <p className=' m-0'><span className=''>Comments</span>: "{review}"</p>
                </div>
                <div className='product-name'>
                    {
                        rating ? <p className='m-0'>Ratings : {[...Array(rating).keys()].map(r => <FaStar key={r} className='review-ratings'></FaStar>)}</p> : <></>
                    }
                </div>
                <div>
                    <div className="user-email d-flex align-items-center justify-content-between py-2">
                        <p className='py-2 m-0'>{email}</p>
                        {
                            userVerified ? <> <p className='text-success m-0' > <FaCheckCircle /></p></> : <><p className='text-danger'><FaTimes /></p></>
                        }
                        {
                            user?.email && user?.uid ? <><button onClick={() => handleDelete(_id)} className='p-3 dlt-btn'><FaTrashAlt className='text-danger'></FaTrashAlt></button></> : <></>
                        }
                        <div>
                            <button className='edit-btn p-2'><Link to={`/update/${_id}`}>Edit</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsCard;