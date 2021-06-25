import React, { useEffect, useState } from 'react';
import EditPostList from '../EditPostList/EditPostList';


const EditPost = () => {
    const [blogs, setBlogs] = useState([])
    console.log(blogs)

    useEffect(() => {
        getBlog()
    }, [])

    const getBlog = () => {
        fetch('http://localhost:7000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }
    
    return (
        <div className="container my-5">
            <div className="row">
                {
                    blogs.map((blog, index) => <EditPostList getBlog={getBlog} key={blog._id} blog={blog} index={index} />)
                }
            </div>
        </div>
    );
};

export default EditPost;