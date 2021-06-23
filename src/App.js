import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddBlogPost from "./components/admin/AddBlogPost/AddBlogPost";
import BlogDetails from "./components/admin/BlogDetails/BlogDetails";
import EditPost from "./components/admin/EditPost/EditPost";
import Home from "./components/Home/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";

function App() {
  return (
    <Router>
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
          <Route path="/blogDetails/:blogId">
            <Navbar />
            <BlogDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
