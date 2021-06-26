import React, { useEffect, useState } from 'react';
import EditPostList from '../EditPostList/EditPostList';


const EditPost = () => {
    const [blogs, setBlogs] = useState([])
    console.log(blogs)

    useEffect(() => {
        fetch('https://infinite-escarpment-78018.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    
    return (
        <div className="container my-5">
            <div className="row">
                {
                    blogs.map((blog, index) => <EditPostList key={blog._id} blog={blog} index={index} />)
                }
            </div>
        </div>
    );
};

export default EditPost;