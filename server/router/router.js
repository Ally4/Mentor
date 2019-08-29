/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
import express from 'express';
import signup from '../controllers/signup';
import change from '../controllers/change';
import authent from '../middleware/authent';


const router = express.Router();

//For the signup
router.post('/api/v1/auth/signup', signup);

//for the patches
router.patch('/api/v1/user/:userId', authent, change);

export default router; 
