import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import google from '../../../img/google.png'
import './Login.css'

const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        photo: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    var provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSign = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signInUser = {
                    name: displayName,
                    email: email,
                    password: '',
                    photo: photoURL,
                    isSignIn: true
                }
                console.log(signInUser)
                setUser(signInUser)
                setLoggedInUser(signInUser)
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                console.log(errorMessage, errorCode, email)
            });

    }

    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            const signOutUser = {
                isSignIn: false,
                name: '',
                photo: '',
                email: ''
            }
            setUser(signOutUser)
            setLoggedInUser(signOutUser)
            console.log(signOutUser, 'sign out successfully')
        }).catch((error) => {
            console.log(error)
        });
    }


    const handleBlur = (e) => {
        let isFieldValid = true;

        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }

        if (e.target.name === "password") {
            const isPasswordValid = e.target.value.length > 6
            const passwordHasNumber = /\d{1,}/.test(e.target.value)
            isFieldValid = (isPasswordValid && passwordHasNumber)
        }

        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value
            setUser(newUserInfo)
            setLoggedInUser(newUserInfo)
        }
    }


    const handleSubmit = (e) => {
        console.log(user.email, user.password)
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo)
                    updatedUserName(user.name)
                    history.replace(from);
                    console.log('sign in user info', res.user)
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = false
                    newUserInfo.error = error.message
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo)
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo)
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = false
                    newUserInfo.error = error.message
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo)
                });
        }
        e.preventDefault()
    }

    const updatedUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(() => {
            console.log('user name updated successfully')
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div className="container my-5 text-center">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <h1 className="my-5 ">Log In To Your Account</h1>
                    <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} />
                    <label htmlFor="newUser"><span className="text-info fw-bold mx-3">New User Sign Up</span></label>
                    <br />
                    <br />
                    <form className="" onSubmit={handleSubmit}>
                        <div className="form-group">
                            {newUser && <input className="form-control" type="text" name="name" onBlur={handleBlur} placeholder="Your Name" />}
                        </div>
                        <br />
                        <div className="form-group">
                            <input className="form-control" type="text" name="email" onBlur={handleBlur} placeholder="Your Email Address" required />
                        </div>
                        <br />
                        <div className="form-group">
                            <input className="form-control" type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required />
                        </div>
                        <br />
                        <input className="form-control bg-success text-light fw-bold" type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
                    </form>
                    <p style={{ color: 'red' }}>{user.error}</p>
                    {user.success && <p style={{ color: 'green' }}>User {newUser ? "created" : "logged in"} successfully</p>}
                    <br />
                    <h2 className="text-secondary">OR</h2>

                    <div className="google my-5">
                        <div className="google-logo">
                            <img src={google} alt="" />
                        </div>
                        <div className="google-sign">
                            {
                                user.isSignIn ?
                                    <button onClick={handleSignOut}>Sign Out</button> :
                                    <button onClick={handleGoogleSign}>Sign In Google</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;