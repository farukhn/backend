import React from 'react';
import { FaSadTear } from 'react-icons/fa';
import useTitle from '../../Utilities/DynamicTitle/DynamicTitle';
import './ErorPage.css'
const ErrorPage = () => {
    useTitle('404 Error')
    return (
        <div>
            <div>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className='text-center'>
                        <FaSadTear className='error-icon img-fluid'></FaSadTear>
                        <h1>NOTHING FOUND IN THIS PAGE</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;