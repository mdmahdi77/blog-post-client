import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
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
            if(data){
                alert("Admin added successfully")
            }
        })
    }

    return (
        <div>
            <h1>Add Admin</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="email" placeholder="Add Email" {...register("email")} />
                <br />
                <button className="mainBtn">Submit</button>
            </form>
        </div>
    );
};

export default MakeAdmin;