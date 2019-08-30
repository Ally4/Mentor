/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
import express from 'express';
import signup from '../controllers/signup';
import getMentors from '../controllers/mentors';
import getAMentor from '../controllers/mentor';
import authent from '../middleware/authent';
import change from '../controllers/change';
import signin from '../controllers/signin';
import create from '../controllers/create';
import getUsers from '../controllers/users';

const router = express.Router();

//For the signup
router.post('/api/v1/auth/signup', signup);

//for all the mentors
router.get('/api/v1/mentors', authent, getMentors);

//for a mentor by id
router.get('/api/v1/mentors/:mentorId', authent, getAMentor);

//for the patches
router.patch('/api/v1/user/:userId', authent, change);

//For the signin
router.post('/api/v1/auth/signin', signin);

//for the creation of the session
router.post('/api/v1/sessions', authent, create);

//for getting all the users
router.get('/api/v1/users', authent, getUsers);

export default router; 
