/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
import express from 'express';
import signup from '../controllers/signup';
import signin from '../controllers/signin';
import authent from '../middleware/authent';
import change from '../controllers/change';
import create from '../controllers/create';
import getAMentor from '../controllers/mentor';
import getMentors from '../controllers/mentors';
import getUsers from '../controllers/users';
import sessions from '../controllers/sessions';
import reject from '../controllers/reject';
import accept from '../controllers/accept';


const router = express.Router();

//For the signup
router.post('/api/v1/auth/signup', signup);

//For the signin
router.post('/api/v1/auth/signin', signin);

//for the patches
router.patch('/api/v1/user/:userId', authent, change);

//for the creation of the session
router.post('/api/v1/sessions', authent, create);

//for a mentor by id
router.get('/api/v1/mentors/:mentorId', authent, getAMentor);

//for all the mentors
router.get('/api/v1/mentors', authent, getMentors);

//for getting all the users
router.get('/api/v1/users', authent, getUsers);

//for the viewing of sessions
router.get('/api/v1/sessionsView', authent, sessions);

//for the mentor to reject the session
router.patch('/api/v1/sessions/:sessionId/reject', authent, reject);

//for the mentor to accept the session
router.patch('/api/v1/sessions/:sessionId/accept', authent, accept);


export default router; 
