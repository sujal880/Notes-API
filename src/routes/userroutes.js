const express=require('express');
const signUp = require('../controllers/signupcontroller');
const signIn = require('../controllers/signincontroller');
const addNote = require('../controllers/addnotescontroller');
const getNotes = require('../controllers/getnotescontroller');
const searchnotes = require('../controllers/searchcontroller');
const verifycontroller = require('../controllers/verifycontroller');
const routes=express.Router();

routes.post('/signup',signUp);
routes.post('/signin',signIn);
routes.post('/addnote',verifycontroller,addNote);
routes.post('/getnotes',verifycontroller,getNotes);
routes.post('/searchnotes',verifycontroller,searchnotes);

module.exports=routes;