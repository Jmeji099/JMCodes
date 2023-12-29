import React, { useEffect } from 'react'

function BlogPost(props) {
    const postInfo = props.post;
    return (
    <div className="p-10 bg-white mb-5 ml-5 mr-5 rounded-lg">
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
