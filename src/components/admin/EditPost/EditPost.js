import React, { useEffect, useState } from 'react';
import EditPostList from '../EditPostList/EditPostList';


const EditPost = () => {
    const [blogs, setBlogs] = useState([])
    console.log(blogs)
    useEffect(() => {
        fetch('http://localhost:7000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            {
                blogs.map((blog, index) => <EditPostList key={blog._id} blog={blog} index={index} />)
            }
        </div>
    );
};

export default EditPost;