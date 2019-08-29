/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable indent */
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();
describe('Signup test', () => {
it('should be able to signup with full information', (done) => {
    const user = {
      firstName: 'Nengo',
      lastName: 'Bin',
      email: 'bin@gmail.com',
      password: '123456',
      address: 'Rwanda',
      bio: 'Teacher',
      occupation: 'developer',
      expertise: 'Public-speaker',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .then((res) => {
        res.body.status.should.be.equal(201);
        done();
      })
      .catch(err => done(err));
  });
      it('should not be able to signup for duplicate', (done) => {
    const user = {
      firstName: 'Bonheur',
      lastName: 'Mwanamboka',
      email: 'bonheur@gmail.com',
      password: '123456',
      address: 'Rwanda',
      bio: 'Teacher',
      occupation: 'developer',
      expertise: 'Public-speaker',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .then((res) => {
        res.body.status.should.be.equal(409);
        done();
      })
      .catch(err => done(err));
  });
      it('should not be able to signup when the is no required input information', (done) => {
    const user = {
      firstName: 'bonth',
      lastName: 'Mwanamboka',
      email: 'bonheurgmail.com',
      password: '123456',
      address: 'Rwanda',
      bio: 'Teacher',
      occupation: 'developer',
      expertise: 'Public-speaker',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .then((res) => {
        res.body.status.should.be.equal(400);
        done();
      })
      .catch(err => done(err));
  });
});