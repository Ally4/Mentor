/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */
/* eslint-disable radix */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import users from '../models/users';


dotenv.config();


const getAMentor = (req, res) => {
  const user = users.find(i => i.id === parseInt(req.params.mentorId));
  jwt.verify(req.token, process.env.THE_KEY, (err, theUser) => {
    if (err) {
      res.status(403).json({
        status: 403,
        error: 'auth failed',
      });
    } else if (theUser.position === 'mentor') {
      res.status(403).json({
        status: 403,
        error: 'Access denied, not allowed',
      });
    } else if (!user) {
      res.status(404).json({
        status: 404,
        error: 'User with the given ID does not exists',
      });
    } else if (user.position !== 'mentor') {
      res.status(401).json({
        status: 401,
        error: 'The given ID is not mentor ID',
      });
    } else {
      res.status(200).json({
        status: 200,
        user,
      });
    }
  });
};

export default getAMentor;
