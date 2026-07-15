const express = require('express');
const router = express.Router();
const { handleGenerateURL, shortId, serverSideRander, Htmlsending } = require("../controllers/url.controller")
router.post("/", handleGenerateURL);
router.get("/html", Htmlsending);

router.get("/test", serverSideRander);
router.get("/:shortId", shortId);
module.exports = router;
