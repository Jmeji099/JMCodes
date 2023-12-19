/**
 * This file is used to store all configuration relatad items. 
 * 
 */

require('../models/BlogPostResources/node_modules/dotenv/lib/main').config();

/************************************** * 
* DATABASE SERVER CONFIGURATIONS
// *****************************************/
const mongoose = require("mongoose");
//Connect to db 
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection;

db.on('error', (error) => { console.log(error) })
db.on('open', () => { console.log("Connected to Database")})
/************************************** * 
* DATABASE SERVER CONFIGURATIONS
*****************************************/

module.exports = {
    database_url: process.env.DATABASE_URL,
    port: process.env.PORT,
};