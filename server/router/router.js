/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
import express from 'express';
import signup from '../controllers/signup';
import getAMentor from '../controllers/mentor';
import authent from '../middleware/authent';
import change from '../controllers/change';
import signin from '../controllers/signin';


const router = express.Router();

//For the signup
router.post('/api/v1/auth/signup', signup);


//for a mentor by id
router.get('/api/v1/mentors/:mentorId', authent, getAMentor);

//for the patches
router.patch('/api/v1/user/:userId', authent, change);

//For the signin
router.post('/api/v1/auth/signin', signin);



export default router; 
