//Imports
const express = require("express");
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors());

/************************************** * 
* ROUTES CONFIGURATIONS
*****************************************/
//Import Routes
const healthRoutes = require('./routes/index');
const blogpostRoutes = require('./routes/BlogPostRoutes/blogPostRoutes');

//Define Routes
app.use("/", healthRoutes);
app.use("/blogposts", blogpostRoutes);

module.exports = app;
