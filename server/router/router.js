/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
import express from 'express';
import signup from '../controllers/signup';
import signin from '../controllers/signin';


const router = express.Router();

//For the signup
router.post('/api/v1/auth/signup', signup);

//For the signin
router.post('/api/v1/auth/signin', signin);


export default router; 
