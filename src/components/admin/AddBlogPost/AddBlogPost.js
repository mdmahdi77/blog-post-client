import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddBlogPost = () => {

    const [imgUrl, setImgUrl] = useState(null)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        const eventData = {
            title: data.title,
            content: data.content,
            img: imgUrl,
            category: data.category,
            date: new Date().getDate() + " " + new Date().getMonth() + " " + new Date().getFullYear()
        }
        console.log(eventData)

        const uri = `http://localhost:7000/addBlog`

        fetch(uri, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    toast.success('Blog post submit successfully')
                }
                e.target.reset()
            })
    };

    const handleImageUrl = event => {
        console.log(event.target.files[0])
        const imageData = new FormData()
        imageData.set('key', '3fdc4394d2aa620592a552e98b379e1c')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <h1 className="text-center my-3">Add Your Blog Post Here</h1>
                    <br />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input className="form-control" name="title" {...register("title")} placeholder="Write Blog Title" />
                        </div>
                        <br />
                        <div className="form-group">
                            <select className="form-control" name="category" {...register("category")}>
                                <option value="bangladesh">Bangladesh</option>
                                <option value="international">International</option>
                                <option value="sports">Sports</option>
                                <option value="design">Design</option>
                                <option value="business">Business</option>
                                <option value="latest">Latest</option>
                                <option value="football">Football</option>
                                <option value="cricket">Cricket</option>
                                <option value="media">Media</option>
                                <option value="health">Health</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                        <br />
                        <div className="form-group">
                            <textarea className="form-control h-100" name="content" {...register("content")} placeholder="Description" rows="5"></textarea>
                        </div>
                        <br />
                        <div className="form-group">
                            <input className="form-control" name="exampleRequired" type="file" onChange={handleImageUrl} />
                        </div>
                        <br />
                        <input className="form-control bg-success text-light fw-bold" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlogPost;