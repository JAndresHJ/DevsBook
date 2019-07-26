const express = require("express");
const router = express.Router();

// @route GET   api/posts
// @desc        Test route
// @access      Public (publics routes do not need a token to access)

router.get("/", (req, res) => res.send("posts route"));

module.exports = router;
