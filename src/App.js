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

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <h1>{loggedInUser.email}</h1>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/blog">
            <Navbar />
            <AddBlogPost />
          </Route>
          <Route path="/editPost">
            <Navbar />
            <EditPost />
          </Route>
          <Route path="/login">
            <Navbar />
            <Login />
          </Route>
          <Route path="/makeAdmin">
            <Navbar />
            <MakeAdmin />
          </Route>
          <Route path="/blogDetails/:blogId">
            <Navbar />
            <BlogDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
