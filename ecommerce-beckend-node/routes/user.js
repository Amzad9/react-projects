const express = require('express');

const router = express.Router();

const userAuth = require("./../middleware/user_verify_token");

const user = require('../controllers/user');

router.post("/addUser", user.userSignUp);
router.post("/signin", user.userLogin);
router.post("/reset",userAuth, user.ResetPassword);
router.put("/forgotpass", user.forgotPass);
module.exports = router;    