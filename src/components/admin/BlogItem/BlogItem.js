import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = (props) => {
    const {_id, title, img } = props.blog
    return (
        <div className="col-md-4">
            <Link to={`/blogDetails/${_id}`}>
                <img src={img} width="350px" alt="" />
                <h3>{title}</h3>
            </Link>
        </div>
    );
};

export default BlogItem;