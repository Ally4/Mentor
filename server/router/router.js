/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
import express from 'express';
import signup from '../controllers/signup';
import getMentors from '../controllers/mentors';
import authent from '../middleware/authent';


const router = express.Router();

//For the signup
router.post('/api/v1/auth/signup', signup);

//for all the mentors
router.get('/api/v1/mentors', authent, getMentors);

export default router; 
