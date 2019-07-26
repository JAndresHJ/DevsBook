const express = require("express");
const router = express.Router();

// @route GET   api/users
// @desc        Test route
// @access      Public (publics routes do not need a token to access)

router.get("/", (req, res) => res.send("User route"));

module.exports = router;
