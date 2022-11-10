import React, { useState } from 'react';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import useTitle from '../../Utilities/DynamicTitle/DynamicTitle';
import Service from '../Service/Service';

const Services = () => {
    useTitle('services')
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div>
            <div className="container">
                <h1 className='text-center'>Our Services</h1>
                <div className="row">
                    {
                        services.length > 0 ?
                            <>
                                {
                                    services.map(service => <Service key={service._id} service={service}></Service>)
                                }
                            </>
                            :
                            <>
                                <div className='text-center py-5'><Spinner animation="border" /></div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;