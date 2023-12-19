const express = require('express');
const router = express.Router();

router.get('/', async (req, res) =>   { 
    res.status(200).json({
        mgs: "Succesfully hit server"});
});

module.exports = router;