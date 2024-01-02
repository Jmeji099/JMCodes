import React, { useEffect, useState } from "react";
import { getRequest } from "../../config/axiosConfig";


export const BlogPostMain = (props) => {
  const [content,setContent] = useState({});
  
  const getBlogPostContent = async () => {
    let endpointUrl = `/blogposts/${props.blogId.id}`
    try {
      const { data } = await getRequest(endpointUrl);
      setContent(data.blogPost);
    } catch (err) {

    }
  }

  useEffect(() => {
    getBlogPostContent();
  }, [])

  return (
      <div className="flex flex-col content-center w-screen h-screen">
        <div className="text-3xl">
          {content.title}
        </div> 
        <div>
          {content.author}
        </div>
        <div>
          {content.publishedOn}
        </div>
        <div>
          {content.content}
        </div>
      </div>
  )

}
