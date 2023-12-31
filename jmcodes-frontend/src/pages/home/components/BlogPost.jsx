import React from 'react'
import { useNavigate } from 'react-router-dom';

function BlogPost(props) {
  const Navigate = useNavigate();
  
  const handleBlogPostClick = (id) =>  {
    const url = `/blogposts/${id}`; 
    Navigate(url); 
  }

  const postInfo = props.post;
  return (
    <div className="mt-4 p-10 bg-white mb-4 ml-5 mr-5 rounded-lg" onClick={() => handleBlogPostClick(postInfo._id)}>
        <h1>Title: {postInfo.title}</h1>
        <p>
            Author: {postInfo.author}
        </p>
        <p>
            Published On: {postInfo.publishedOn}
        </p>
        <p>
            ID: {postInfo._id}
        </p>
    </div>
  )
}

export default BlogPost
