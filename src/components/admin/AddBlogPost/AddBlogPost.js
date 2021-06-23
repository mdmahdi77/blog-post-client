import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddBlogPost = () => {

    const [imgUrl, setImgUrl] = useState(null)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const eventData = {
            title: data.title,
            content: data.content,
            img: imgUrl
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
        .then(response => console.log(response))
        .then(data => console.log(data))
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
        <div>
            <h1>Add Blog</h1>
            <hr />
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input name="title" {...register("title")} placeholder="Write Blog Title" />
                </div>
                <div className="form-group">
                    <textarea name="content" {...register("content")} placeholder="Description" cols="30" row="4" ></textarea>
                </div>
                <div className="form-group">
                    <input name="exampleRequired" type="file" onChange={handleImageUrl} />
                </div>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddBlogPost;