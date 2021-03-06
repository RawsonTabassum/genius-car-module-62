import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {

    const [services, setServices] = useServices();

    const handleDelete = (id)=> {
        const proceed = window.confirm('are you sure?');

        if(proceed){
            const url = `http://localhost:5000/service/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res=> res.json())
                .then(data=> {
                    console.log(data);
                    const remaining = services.filter(service=> service._id !== id);
                    setServices(remaining);
                });
        }
    }
    return (
        <div>
            <h2>this is manage services</h2>
            {
                services.map(service=> <div className='my-3' key={service._id}>
                    <h5 className='text-center'>{service.name} <button onClick={()=> handleDelete(service._id)} className='btn btn-danger'>Delete</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;