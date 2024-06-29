const express=require('express');
const signUp = require('../controllers/signupcontroller');
const signIn = require('../controllers/signincontroller');
const routes=express.Router();

routes.post('/signup',signUp);
routes.post('/signin',signIn);

module.exports=routes;