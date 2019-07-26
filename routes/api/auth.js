const express = require("express");
const router = express.Router();

// @route GET   api/auth
// @desc        Test route
// @access      Public (publics routes do not need a token to access)

router.get("/", (req, res) => res.send("auth route"));

module.exports = router;
