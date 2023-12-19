const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
    title : {
        type: String,
        require: true
    },
    author : {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('BlogPost', blogPostSchema);