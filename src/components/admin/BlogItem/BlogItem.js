import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = (props) => {
    const {_id, title, img, date } = props.select
    return (
        <div className="col-md-6">
            <div className="d-flex justify-content-center my-5">
            <Link to={`/blogDetails/${_id}`} className="text-decoration-none">
                <div className="card my-5 border-0">
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <p className="text-success fw-bolder">Updated: <span className="text-secondary">{date}</span></p>
                        <h5 className="text-warning">{title}</h5>
                    </div>
                </div>
            </Link>
            </div>
        </div>
    );
};

export default BlogItem;