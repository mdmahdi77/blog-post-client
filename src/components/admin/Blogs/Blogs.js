import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BlogItem from '../BlogItem/BlogItem';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    console.log(blogs)
    useEffect( () => {
        fetch('http://localhost:7000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            <h1>Blogs</h1>
            <div className="row">
                {
                    blogs.map(blog => <BlogItem blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blogs;