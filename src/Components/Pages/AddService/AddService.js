import React from 'react';
import toast from 'react-hot-toast';
import addImg from '../../Assets/addService.svg';
import useTitle from '../../Utilities/DynamicTitle/DynamicTitle';
import './AddService.css'
const AddService = () => {
    useTitle('Add Service')
    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const price = form.price.value;
        const details = form.details.value;
        const ratings = form.ratings.value;
        const name = form.name.value;
        const service = {
            name:name,
            image: image,
            price: price,
            details: details,
            ratings: parseInt(ratings)
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Product Added Successfully');
                form.reset();
            })


    }
    return (
        <div>
            <h2 className='text-center'>Add A Service </h2>
            <div className="container py-4">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src={addImg} className="w-100 img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <form onSubmit={handleAddService}>
                            <div className='my-2'>
                                <label htmlFor="Product Image Link">Product Name</label>
                                <input type="text" name='name' className='w-100 py-2' placeholder='Product Name' />
                            </div>
                            <div className='my-2'>
                                <label htmlFor="Product Image Link">Product Image Link</label>
                                <input type="text" name='image' className='w-100 py-2' placeholder='Product Image Link' />
                            </div>
                            <div className='my-2'>
                                <label htmlFor="Product Price">Product Price</label>
                                <input type="number" name='price' className='w-100 py-2' placeholder='product price' />
                            </div>
                            <div className='my-2'>
                                <label htmlFor="Product Price">Product Details</label>
                                <input type="text" name='details' className='w-100 py-2' placeholder='product details' />
                            </div>
                            <div className='my-2'>
                                <label htmlFor="Product Price">Product Ratings</label>
                                <input type="number" name='ratings' className='w-100 py-2' placeholder='product ratings' />
                            </div>
                            <button className='login-btn my-3' type="submit">Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;