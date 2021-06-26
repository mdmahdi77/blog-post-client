import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = (props) => {
    return (
        <div>
           { props.admin ? <ul className="list-unstyled list-inline my-5">
                <li className="list-inline-item text-success fw-bolder">
                    <Link class="nav-link" to="/blog">Add-Blog-Post</Link>
                </li>
                <li className="list-inline-item text-success fw-bolder">
                    <Link class="nav-link" to="/editPost">Edit-Post</Link>
                </li>
                <li className="list-inline-item text-success fw-bolder">
                    <Link class="nav-link" to="/makeAdmin">Make-admin</Link>
                </li>
            </ul> :
            <h1 className="text-center my-5 py-5">This page only admin User</h1>
            }
        </div>
    );
};

export default AdminNav;