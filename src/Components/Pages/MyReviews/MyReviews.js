import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { AuthenticationContext } from '../../AuthContext/AuthContext';
import useTitle from '../../Utilities/DynamicTitle/DynamicTitle';
import MyReviewsCard from '../MyReviewsCard/MyReviewsCard';


const MyReviews = () => {
    useTitle('My reviews')
    const { user } = useContext(AuthenticationContext);
    const [myReviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user.email]);
    // delete user
    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/myreviews/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('User Review Delete Successfully')
                    const remainingReviews = myReviews.filter(review => review._id !== id);
                    setMyReviews(remainingReviews)
                }
            })
    }
    return (
        <div>
            <div className="container">
                {
                    myReviews.length>0?<><h2 className='text-center'>MY REVIEWS</h2></>:<><div className='py-5 my-5'><h2 className='text-center py-5 my-5'>This User Have No Review</h2></div></>
                }
                <div className="row">
                    {
                        myReviews.map(review => <MyReviewsCard key={review._id} handleDelete={handleDelete} reviewInfo={review}></MyReviewsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyReviews;