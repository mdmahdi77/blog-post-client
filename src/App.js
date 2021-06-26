import React, { useState } from "react";
import { createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddBlogPost from "./components/admin/AddBlogPost/AddBlogPost";
import BlogDetails from "./components/admin/BlogDetails/BlogDetails";
import EditPost from "./components/admin/EditPost/EditPost";
import MakeAdmin from "./components/admin/makeAdmin/MakeAdmin";
import Home from "./components/Home/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";
import Login from "./components/Login/Login/Login";
import Admin from "./components/admin/Admin";
import PrivateRoute from "./components/Login/Login/PrivateRoute";
import { ToastContainer, toast } from 'react-toastify';
import AdminNav from "./components/admin/AdminNav";
import Footer from "./components/Footer/Footer";

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <ToastContainer />
        <Switch>
          <Route path="/home">
            <Home />
            <Footer />
          </Route>
          <Route path="/blog">
            <Navbar />
            <Admin />
            <AddBlogPost />
          </Route>
          <Route path="/editPost">
            <Navbar />
            <Admin />
            <EditPost />
          </Route>
          <Route path="/login">
            <Navbar />
            <Login />
          </Route>
          <Route path="/makeAdmin">
            <Navbar />
            <Admin />
            <MakeAdmin />
          </Route>
          <PrivateRoute path="/admin">
            <Navbar />
            <Admin />
          </PrivateRoute>
          <Route path="/blogDetails/:blogId">
            <Navbar />
            <BlogDetails />
            <Footer />
          </Route>
          <Route path="/">
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
