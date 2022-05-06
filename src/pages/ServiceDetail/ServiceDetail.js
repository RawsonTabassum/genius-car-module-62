import React, { useEffect, useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom'

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const navigate = useNavigate();

    const [service, setService] = useState({});

    useEffect(()=> {
        const url = `http://localhost:5000/service/${serviceId}`;

        fetch(url)
            .then(res=> res.json())
            .then(data=> setService(data));
    }, []);



    const handleCheckOut = (event)=> {
        navigate('/checkout')
    }
    return (
        <div className='my-3'>
            <h1 className='text-center'>this is service details : {service.name}</h1>
            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dignissimos itaque incidunt ullam libero corrupti ipsum neque, numquam odit rem, recusandae blanditiis vero eveniet. Sed consequatur ullam eligendi minus! Nesciunt.</p>
            <br />
            <div className='d-flex justify-content-center'>
                <button onClick={handleCheckOut} className='btn btn-primary'> Proceed Checkout</button>
            </div>
        </div>
    );
};

export default ServiceDetail;