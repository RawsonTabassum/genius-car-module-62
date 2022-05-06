import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const url = `http://localhost:5000/service`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res=> res.json())
            .then(res=> console.log(res));
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' className='form-control mb-2' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='Photo URL' className='form-control mb-2' {...register("img")} />

                <textarea placeholder='Description' className='form-control mb-2' {...register("description")} />
                <input  placeholder='Price' className='form-control mb-2' type="number" {...register("price")} />
                <input className='btn btn-primary my-2' type="submit" />
            </form>
        </div>
    );
};

export default AddService;