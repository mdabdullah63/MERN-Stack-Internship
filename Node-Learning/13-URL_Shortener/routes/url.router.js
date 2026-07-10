const express = require('express');
const router = express.Router();
const {handleGenerateURL}=require("../controllers/url.controller")
router.post('/',handleGenerateURL);

module.exports=router;
