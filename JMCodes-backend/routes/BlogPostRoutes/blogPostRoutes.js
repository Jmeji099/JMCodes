const express = require('express');
const router = express.Router();
const blogPostSchema = require('../../models/BlogPostResources/blogPostModel')

/**
 * Returns all the blog posts in the collection.
 */
router.get('/', async (req, res) =>   { 
    try {
        let allBlogPost = await blogPostSchema.find();
        res.json({blogPosts: allBlogPost}).sendStatus(200); 
        return; 
    } catch (err) {
        return;
    }
});


/**
 * Returns a blog post document by id. 
 */
router.get('/:id', async (req, res) => {
    try {
        let blogPost = await blogPostSchema.findById(req.params.id);
        
        if (!blogPost) {
            throw err;
        }
        
        res.json({"blogPost": blogPost}).sendStatus(200);
        
        return;

    } catch (err) {
        return;
    }
});

/**
 * Creates a new blog post entry. 
 */
router.post('/', async (req, res) => { 
    // If published on exist we set it as this value else set it as current date. 
    publishedOn = req.headers.publishedOn != null ? req.headers.publishedOn : new Date()

    const newPost = new blogPostSchema({
        title: req.headers.title,
        author: req.headers.author,
        content: req.body.content,
        publishedOn: publishedOn
    });

    let status;
    let post = {};
    try {
        post = await newPost.save();
        status = 201;
    } catch (err) {
        post = { msg: "Unable to save the blog post" }
        status = 400;
    }
    
    return res.json(post).status(status);  
});


/**
 * Update a given blog post. 
 */
// router.put('/:id', async (req,res) => {

// });


/**
 * Deletes a given post by id
 */
router.delete('/:id', async (req, res) => {
    requested_id = req.params.id;
    let responseMessage; 
    let status;
    try {
        response = await blogPostSchema.deleteOne({ _id:requested_id})
        responseMessage = {msg: `Deleted blog post id ${requested_id}`}
        status = 200
    } catch (err) {
        responseMessage = {msg : "Unable to delete the blog post"}
        status = 500;
    }
    
    return res.status(status).json(responseMessage)
});


module.exports = router;
