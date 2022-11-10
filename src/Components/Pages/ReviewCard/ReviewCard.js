import React from 'react';
import { FaCheckCircle, FaStar, FaTimes} from 'react-icons/fa';
import './ReviewCard.css'
const ReviewCard = ({ reviewinfo }) => {
    const { email, productname, review, userImage, userVerified, rating } = reviewinfo;
    return (
        <div className='col-lg-4 py-5'>

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
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;