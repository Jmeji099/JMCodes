import React from "react";
import { BrowserRouter as Router,Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/home/Home";
import { BlogPostMain } from "./pages/BlogPosts/BlogPostMain";

const BlogPost = () => {
  const idParam = useParams();
  console.log(idParam);
  return (
    <BlogPostMain blogId={idParam}/>
  )
}

/**
* functional component Router that will handle all routes of the page. 
**/
export const AppRouter = () => {
  return(
    <div className="mt-[70px] bg-slate-200">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogposts/:id" element={<BlogPost />}/>
        </Routes> 
      </Router>
    </div>
  );

};
