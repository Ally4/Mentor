/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
import express from 'express';
import signin from '../controllers/signin';


const router = express.Router();

//for the signin
router.post('/api/v1/auth/signin', signin);


export default router; 
