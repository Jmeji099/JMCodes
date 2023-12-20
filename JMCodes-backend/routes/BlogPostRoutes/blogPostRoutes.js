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

    try {
        const post = await newPost.save();
        res.sendStatus(201).json(post);
        return;
    } catch {
        res.sendStatus(400).json({msg: "Unable to save the blog post"}); 
        return;
    }
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
    id = req.params.id;
    res.status(200).json({mgs: `Deleted the blog post with id ${id}`})
});

module.exports = router;