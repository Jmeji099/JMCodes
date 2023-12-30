import React from 'react'
import {
    useState,
    useEffect
} from 'react';
import BlogPost from './BlogPost';
import {getRequest} from '../../../config/axiosConfig';

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
    const handleOpenBlogPost = (postId) => {
        console.log("GOING TO THIS BLOG POST");
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
