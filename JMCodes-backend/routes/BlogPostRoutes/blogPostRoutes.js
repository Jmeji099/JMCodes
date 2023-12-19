const express = require('express');
const router = express.Router();
const blogPostSchema = require('../../models/BlogPostResources/blogPostModel')

router.get('/', async (req, res) =>   { 
    res.send(200).json({msg: "hit this endpoint :) "});
});


router.post('/', async (req, res) => { 
    const newPost = new blogPostSchema({
        title: req.body.title,
        author: req.body.author,
    })

    try {
        const post = await newPost.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({msg: "Unable to save the blog post"});
    }
});

module.exports = router;