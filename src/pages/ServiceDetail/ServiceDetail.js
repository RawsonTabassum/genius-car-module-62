import React from 'react';
import { useNavigate, useParams} from 'react-router-dom'

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const navigate = useNavigate();

    const handleCheckOut = (event)=> {
        navigate('/checkout')
    }
    return (
        <div className='my-3'>
            <h1 className='text-center'>this is service details : {serviceId}</h1>
            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dignissimos itaque incidunt ullam libero corrupti ipsum neque, numquam odit rem, recusandae blanditiis vero eveniet. Sed consequatur ullam eligendi minus! Nesciunt.</p>
            <br />
            <div className='d-flex justify-content-center'>
                <button onClick={handleCheckOut} className='btn btn-primary'> Proceed Checkout</button>
            </div>
        </div>
    );
};

export default ServiceDetail;