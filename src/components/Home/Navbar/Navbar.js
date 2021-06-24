import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('http://localhost:7000/isAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email})
        })
        .then(response => response.json())
        .then(data => setIsAdmin(data))
    },[])
    
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" href="#">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/home" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/login">Login</Link>
                            </li>
                            { isAdmin && <div><li class="nav-item">
                                <Link class="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/editPost">Edit-Post</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/makeAdmin">Make-admin</Link>
                            </li> </div> }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;