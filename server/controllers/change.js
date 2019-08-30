/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable radix */
/* eslint-disable object-curly-newline */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import users from '../models/users';

dotenv.config();


const change = (req, res) => {
  const user = users.find(i => i.id === parseInt(req.params.userId));

  jwt.verify(req.token, process.env.THE_KEY, (err, theUser) => {
    if (err) {
      res.status(403).json({
        status: 403,
        error: 'auth failed',
      });
    } else if (theUser.position !== 'admin') {
      res.status(403).json({
        status: 403,
        error: 'Access denied',
      });
    } else if (!user) {
      res.status(404).json({
        status: 404,
        error: 'User ID not found',
      });
    } else if (user.position === 'admin' || user.position === 'mentor') {
      res.status(401).json({
        status: 401,
        error: 'Must be users ID',
      });
    } else {
      user.position = 'mentor';
      users.push(user);
      res.status(200).json({
        status: 200,
        message: 'User changed to mentor',
        user,
      });
    }
  });
};

export default change;
