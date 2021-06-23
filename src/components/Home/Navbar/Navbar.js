import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
                                <Link class="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/editPost">Edit-Post</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;