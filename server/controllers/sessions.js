/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import sessions from '../models/sessions';

dotenv.config();

const getSessions = (req, res) => {
  jwt.verify(req.token, process.env.THE_KEY, (err, theUser) => {
    if (err) {
      res.status(403).json({
        status: 403,
        error: 'auth failed',
      });
    } else if (theUser.position !== 'mentor') {
      res.status(403).json({
        status: 403,
        error: 'Access denied',
      });
    } else {
      const session = sessions.filter(c => c.mentorId === theUser.id);
      res.status(200).json({
        status: 200,
        session,
      });
    }
  });
};

export default getSessions;
