import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BlogItem from '../BlogItem/BlogItem';
import './Blogs.css'
import ReactPaginate from 'react-paginate';
import axios from 'axios';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [selected, setSelected] = useState("bangladesh")
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0)

    useEffect(() => {
        fetch('https://infinite-escarpment-78018.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                setPageCount(Math.ceil(data.length / perPage))
            })
    }, [blogs.length])

    // const selectedBlogs = blogs.filter(blog => blog.category === selected)
    // console.log(selectedBlogs)

    const slice = blogs.slice(offset, offset + perPage)
    const selectedBlogs = slice.filter(blog => blog.category === selected)
    console.log(selectedBlogs)

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    return (
        <div className="blogs-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="text-center my-5 text-success">Blogs Categories</h3>
                        <div>
                            <ul className="list-unstyled list-inline my-5 container-fluid">
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
                        </div>
                        <div className="my-5 mx-3 bg-light p-3">
                            <h4 className="text-success my-3">GET WEEKLY TIPS AND INSPIRATION</h4>
                            <p className="my-4">Sign up below to get the latest from Creative Bloq, plus exclusive special offers, direct to your inbox!</p>
                            <form action="">
                                <div className="form-group my-4">
                                    <input className="form-control" type="email" placeholder="Enter Your Email Address" />
                                </div>
                                <div className="d-flex my-2">
                                    <input className="mt-2 mx-3" type="checkbox" id="check" />
                                    <label htmlFor="check">Contact me with news and offers from other Future brands</label>
                                </div>
                                <div className="d-flex my-2">
                                    <input className="mt-2 mx-3" type="checkbox" id="check" />
                                    <label htmlFor="check">Receive email from us on behalf of our trusted partners or sponsors</label>
                                </div>
                                <div className="form-group my-5">
                                    <input className="form-control bg-warning text-light fw-bolder" type="button" value="Sign Up" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="container-fluid">
                            <div className="row">
                                {
                                    selectedBlogs.length === 0 && <div className="col-md-12 m-auto my-5 spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>
                                }
                                {
                                    selectedBlogs.map(select => <BlogItem key={select._id} select={select} />)
                                }
                                
                                <ReactPaginate
                                    previousLabel={"prev"}
                                    nextLabel={"next"}
                                    breakLabel={"..."}
                                    breakClassName={"break-me"}
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName={"pagination"}
                                    subContainerClassName={"pages pagination"}
                                    activeClassName={"active"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blogs;