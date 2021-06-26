import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import AdminNav from './AdminNav';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://infinite-escarpment-78018.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => setIsAdmin(data))
    }, [])
    return (
        <div className="container">
            <AdminNav admin={isAdmin} />
        </div>
    );
};

export default Admin;