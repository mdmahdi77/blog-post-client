import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data, e) => {
        const eventData = {
            email: data.email
        }
        console.log(eventData)

        const uri = `http://localhost:7000/addAdmin`
        fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success("Admin email successfully added")
                }
                e.target.reset()
            })
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <h1 className="text-center my-5">Make Admin Here</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input className="form-control" name="email" placeholder="Add Email" {...register("email")} />
                        </div>
                        <br />
                        <div className="form-group">
                            <input className="form-control bg-success text-light fw-bold" type="button" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;