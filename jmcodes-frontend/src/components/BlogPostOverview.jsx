import React from 'react'
import { getRequest} from '../config/axiosConfig'
import {
    useState,
    useEffect
} from 'react';

import BlogPost from './BlogPost';

function BlogPostOverview() {

    const [blogPosts, setBlogPost] = useState([]);
    
    const getAllBlogPosts = async()  => {
        console.log("Fetching all blog post from useeffect")
        let endpoint = '/blogposts/'
        try {
            const {data} = await getRequest(endpoint)
            console.log(data);
            setBlogPost(data.blogPosts)
        } catch (err) {
            console.log(err);
        }
    }
 
    useEffect(()=> {
        getAllBlogPosts() 
    }, []);

    return ( 
        <>
        {blogPosts.map((post, index) => { 
            return (
                <div key={index}>
                    <BlogPost post={post}/>
                </div>
            )
        })}
        </>
    )
}

export default BlogPostOverview