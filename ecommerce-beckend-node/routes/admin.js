const express = require('express');

const router = express.Router();

const auth = require("./../middleware/verify_token");

const signUpController = require('../controllers/admin');

router.post("/signup", signUpController.signUp);
router.post("/login", signUpController.login);
router.post("/resetPassword", auth, signUpController.saveResetPassword);
router.put("/forgotPassword", signUpController.forgotPassword);
module.exports = router;