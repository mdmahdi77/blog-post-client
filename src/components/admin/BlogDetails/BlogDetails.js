import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {

    const {blogId} = useParams()

    const [blogs, setBlogs] = useState([])

    useEffect( () => {
        fetch('http://localhost:7000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    const blogDetails = blogs.find(blog => blog._id == blogId)
    console.log(blogDetails)

    return (
        <div>
            <img src={blogDetails?.img} width="100%" height="400px" alt="" />
            <h3>{blogDetails?.title}</h3>
            <p>{blogDetails?.content}</p>
        </div>
    );
};

export default BlogDetails;