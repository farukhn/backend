import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { AuthenticationContext } from '../../AuthContext/AuthContext';
import userAvatar from '../../Assets/user.png';
import updateImg from '../../Assets/update.svg'
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
const UpdateReview = () => {
    const { user } = useContext(AuthenticationContext);
    const [rating, setRating] = useState(0);
    const data = useLoaderData();
    const { review, _id } = data;
    console.log(data)
    const updateReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const updatedInfo = {
            message: message,
            rating: parseInt(rating)
        };
        fetch(`http://localhost:5000/update/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Review Updated');
                form.reset()
            })
        
    }
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src={updateImg} className="w-100 img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className='text-center'>UPDATE YOUR REVIEW</h2>
                        <form onSubmit={updateReview}>
                            <div className='review-avatar text-center py-3'>
                                {user?.email ? <><img src={user.photoURL} alt="" /></> : <><img src={userAvatar} alt="" /></>}
                            </div>
                            <div>
                                <input readOnly className='w-100 py-2 review-input' defaultValue={user?.email} type="email" name='email' />
                            </div>
                            <div className='my-3'>
                                <h6>Edit Your Review</h6>
                                {
                                    user?.email && user?.uid ? <textarea className='w-100 py-2 review-input' placeholder={review} name="message" id="" cols="50" rows="5"></textarea> : <textarea className='w-100 py-2 review-input' readOnly name="message" id="" cols="50" rows="5"></textarea>
                                }
                            </div>
                            <div className='rating'>
                                <p className="d-flex align-items-center">Rate Our Product :
                                    <select onChange={(event) => setRating(event.target.value)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <FaStar className="rate-icon mx-2"></FaStar>

                                </p>
                            </div>
                            <div>
                                <button type="submit" className='review-btn my-2'>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateReview;