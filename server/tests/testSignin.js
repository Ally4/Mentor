/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

describe('Signin test', () => {
    it('should be able to signin', (done) => {
        const user = {
            email: 'patos@gmail.com',
            password: 'Aa1234',
        };
        chai.request(app)
          .post('/api/v1/auth/signin')
          .send(user)
          .then((res) => {
            res.body.status.should.be.equal(200);
            done();
          })
          .catch(err => done(err));
      });

      it('should not be able to signin with invalid email or password', (done) => {
        const user = {
            email: 'patos@gmail.com',
            password: 'Aa123hgfj',
        };
        chai.request(app)
          .post('/api/v1/auth/signin')
          .send(user)
          .then((res) => {
            res.body.status.should.be.equal(400);
            done();
          })
          .catch(err => done(err));
      });

      it('should not be able to signin with invalid email or password', (done) => {
        const user = {
            email: 'patos@gmail.com',
            password: 'Aa123',
        };
        chai.request(app)
          .post('/api/v1/auth/signin')
          .send(user)
          .then((res) => {
            res.body.status.should.be.equal(400);
            done();
          })
          .catch(err => done(err));
      });
      it('should not be able to signin with wrong email', (done) => {
        const user = {
            email: 'patosvdv@gmail.com',
            password: 'Aa1234',
        };
        chai.request(app)
          .post('/api/v1/auth/signin')
          .send(user)
          .then((res) => {
            res.body.status.should.be.equal(404);
            done();
          })
          .catch(err => done(err));
      });
});