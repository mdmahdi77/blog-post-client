import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {

    const { blogId } = useParams()

    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://infinite-escarpment-78018.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                setLoading(false)
            })
    }, [])

    const blogDetails = blogs.find(blog => blog._id == blogId)
    console.log(blogDetails)

    return (
        <div className="container my-5">
            {
                loading ? <div className="col-md-12 my-5 spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div> : <div className="">
                    <img src={blogDetails?.img} width="100%" height="400px" alt="" />
                    <h3 className="text-success my-5">{blogDetails?.title}</h3>
                    <p className="text-lead">{blogDetails?.content}</p>
                </div>
            }
        </div>
    );
};

export default BlogDetails;