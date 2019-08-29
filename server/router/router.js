/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
import express from 'express';
import signup from '../controllers/signup';
import getAMentor from '../controllers/mentor';
import authent from '../middleware/authent';


const router = express.Router();

//For the signup
router.post('/api/v1/auth/signup', signup);

//for a mentor by id
router.get('/api/v1/mentors/:mentorId', authent, getAMentor);

export default router; 
