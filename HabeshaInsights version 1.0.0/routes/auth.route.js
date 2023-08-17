// import express from "express";
const express = require('express')
const router = express.Router();
const authController = require('./../controllers/auth.controller')
router.post('/register',authController.register);
router.post('/login',authController.login);


// import { login } from "../controllers/auth.js";
// router.post("/login", login);
// export default router;


module.exports = router;