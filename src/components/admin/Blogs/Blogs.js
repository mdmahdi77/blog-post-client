import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BlogItem from '../BlogItem/BlogItem';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const  [selected, setSelected] = useState("bangladesh")

    useEffect(() => {
        fetch('http://localhost:7000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [blogs.length])

    const selectedBlogs = blogs.filter(blog => blog.category === selected)
    console.log(selectedBlogs)

    return (
        <div className="blogs-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <nav>
                            <ul className="list-unstyled list-inline my-5">
                                <li onClick={() => setSelected("bangladesh")} className="list-inline-item">
                                    <span className={selected === "bangladesh" ? "active nav-link" : "nav-link"}>Bangladesh</span>
                                </li>
                                <li onClick={() => setSelected("international")} className="list-inline-item">
                                    <span className={selected === "international" ? "active nav-link" : "nav-link"}>International</span>
                                </li>
                                <li onClick={() => setSelected("sports")} className="list-inline-item">
                                    <span className={selected === "sports" ? "active nav-link" : "nav-link"}>Sports</span>
                                </li>
                                <li onClick={() => setSelected("design")} className="list-inline-item">
                                    <span className={selected === "design" ? "active nav-link" : "nav-link"}>Design</span>
                                </li>
                                <li onClick={() => setSelected("business")} className="list-inline-item">
                                    <span className={selected === "business" ? "active nav-link" : "nav-link"}>Business</span>
                                </li>
                                <li onClick={() => setSelected("latest")} className="list-inline-item">
                                    <span className={selected === "latest" ? "active nav-link" : "nav-link"}>Latest</span>
                                </li>
                                <li onClick={() => setSelected("football")} className="list-inline-item">
                                    <span className={selected === "football" ? "active nav-link" : "nav-link"}>Football</span>
                                </li>
                                <li onClick={() => setSelected("cricket")} className="list-inline-item">
                                    <span className={selected === "cricket" ? "active nav-link" : "nav-link"}>Cricket</span>
                                </li>
                                <li onClick={() => setSelected("media")} className="list-inline-item">
                                    <span className={selected === "media" ? "active nav-link" : "nav-link"}>Media</span>
                                </li>
                                <li onClick={() => setSelected("health")} className="list-inline-item">
                                    <span className={selected === "health" ? "active nav-link" : "nav-link"}>Health</span>
                                </li>
                                <li onClick={() => setSelected("other")} className="list-inline-item">
                                    <span className={selected === "other" ? "active nav-link" : "nav-link"}>Others</span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-8">
                        <div className="container-fluid">
                            <div className="row">
                                {
                                    selectedBlogs.map(select => <BlogItem key={select._id} select={select} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;