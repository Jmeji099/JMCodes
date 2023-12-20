const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
    title : {
        type: String,
        require: true
    },
    author : {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    publishedOn: {
        type: Date,
        require: false
    }
});

module.exports = mongoose.model('BlogPost', blogPostSchema);