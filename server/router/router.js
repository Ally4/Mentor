/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
import express from 'express';
import signup from '../controllers/signup';


const router = express.Router();

//For the signup
router.post('/api/v1/auth/signup', signup);

export default router; 
