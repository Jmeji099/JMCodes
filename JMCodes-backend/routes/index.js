const express = require('express');
const router = express.Router();

// This route will be used to get diagnostic information on the backend API. 
router.get('/', async (req, res) =>   { 
    res.status(200).json({
        mgs: "Succesfully hit server"});
});

module.exports = router;