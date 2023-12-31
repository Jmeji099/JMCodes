import React from 'react'
import {
    useState,
    useEffect
} from 'react';
import BlogPost from './BlogPost';
import {getRequest} from '../../../config/axiosConfig';
import { useNavigate } from 'react-router-dom';

function BlogPostOverview() {
    const Navigate = useNavigate();
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
        <div>
        {blogPosts.map((post, index) => { 
            return (
                <div key={index}>
                    <BlogPost post={post}/>
                </div>
            )
        })}
        </div>
    )
}

export default BlogPostOverview
