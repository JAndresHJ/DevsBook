const express = require("express");
const router = express.Router();

// @route GET   api/profile
// @desc        Test route
// @access      Public (publics routes do not need a token to access)

router.get("/", (req, res) => res.send("profile route"));

module.exports = router;
