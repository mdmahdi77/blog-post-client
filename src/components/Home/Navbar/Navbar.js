import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../img/blog.png'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <Link class="navbar-brand" href="#">
                        <div className="logo d-flex align-items-center">
                            <img src={logo} width="60px" alt="" />
                            <h3>golB</h3>
                        </div>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                        <ul class="navbar-nav justify-content-end" style={{ width: "100%" }}>
                            <li class="nav-item">
                                <Link className="nav-link active" to="/home" href="#"><span className="fw-bold text-dark">Home</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link active" to="/login"><span className="fw-bold text-dark">Login</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link active" to="/admin"><span className="fw-bold text-dark">Admin</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/"><span className="fw-bold text-info">{loggedInUser.name}</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;