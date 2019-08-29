/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

describe('Change User test', () => {
    const tokenAdmin = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZmlyc3ROYW1lIjoiTkVOR08iLCJsYXN0TmFtZSI6IkFsbHkiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDJwOEhUVmwxMnF5bVU2bjh3bEs5Vi50SWE0ZEZrODMyMzE1M2pOcjdKQzJEYWlsVGJBMHZlIiwicG9zaXRpb24iOiJhZG1pbiIsImlhdCI6MTU2Njg5NjA3OH0.MWz3N8dU92NC2sTAml3n_FlBYBsEejdjGdkafrt2ozc';

    const tokenAdminErr = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZmlyc3ROYW1lIjoiTkVOR08iLCJsYXN0TmFtZSI6IkFsbHkiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDJwOEhUVmwxMnF5bVU2bjh3bEs5Vi50SWE0ZEZrODMyMzE1M2pOcjdKQzJEYWlsVGJBMHZlIiwicG9zaXRpb24iOiJhZG1pbiIsImlhdCI6MTU2Njg5NjA3OH0.MWz3N8dU92NC2sTAml3n_FlBYBsEejdjGdkafrt2oz';

    const tokenMentor = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3ROYW1lIjoiUGF0cmljayIsImxhc3ROYW1lIjoiUmVueSIsImVtYWlsIjoicGF0b3NAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkcjNYcHg2MFNUaFBzdjUuUEpoeXJST0dZRFVYZDZxRlQzT0VqajMzdVdsbzdQWGU4MC9PYlciLCJiaW8iOiJUZWFjaGVyIiwib2NjdXBhdGlvbiI6ImRldmVsb3BlciIsImV4cGVydGlzZSI6IlB1YmxpYy1zcGVha2VyIiwiYWRkcmVzcyI6IlJ3YW5kYSIsInBvc2l0aW9uIjoibWVudG9yIiwiaWF0IjoxNTY2ODkwNDk4fQ.eoxnYy8bAkpLFh6XJjdwIpgUhs2d3DLYzHZEjFNSu_s';

    const tokenMentorErr = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3ROYW1lIjoiUGF0cmljayIsImxhc3ROYW1lIjoiUmVueSIsImVtYWlsIjoicGF0b3NAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkcjNYcHg2MFNUaFBzdjUuUEpoeXJST0dZRFVYZDZxRlQzT0VqajMzdVdsbzdQWGU4MC9PYlciLCJiaW8iOiJUZWFjaGVyIiwib2NjdXBhdGlvbiI6ImRldmVsb3BlciIsImV4cGVydGlzZSI6IlB1YmxpYy1zcGVha2VyIiwiYWRkcmVzcyI6IlJ3YW5kYSIsInBvc2l0aW9uIjoibWVudG9yIiwiaWF0IjoxNTY2ODkwNDk4fQ.eoxnYy8bAkpLFh6XJjdwIpgUhs2d3DLYzHZEjFNSu_';

    const tokenUser = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiTXVnaXNoYSIsImxhc3ROYW1lIjoiQm9yaXMiLCJlbWFpbCI6ImJvbmhldXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkVFM2VDFEVjQwdUdFNjN2LlFZUnovT242Uy5scVd6dFVDNkhDa2MwbHA3SndaY1lZYW8uSjIiLCJiaW8iOiJUZWFjaGVyIiwib2NjdXBhdGlvbiI6IkRldmVsb3BlciIsImV4cGVydGlzZSI6IlB1YmxpYy1zcGVha2VyIiwiYWRkcmVzcyI6IlJ3YW5kYSIsInBvc2l0aW9uIjoidXNlciIsImlhdCI6MTU2Njg5MDU3NX0.P67BM0Gj4IeL54ovDiKeCwfXKBS1psWRxSW56P_020M';

    const tokenUserErr = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiTXVnaXNoYSIsImxhc3ROYW1lIjoiQm9yaXMiLCJlbWFpbCI6ImJvbmhldXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkVFM2VDFEVjQwdUdFNjN2LlFZUnovT242Uy5scVd6dFVDNkhDa2MwbHA3SndaY1lZYW8uSjIiLCJiaW8iOiJUZWFjaGVyIiwib2NjdXBhdGlvbiI6IkRldmVsb3BlciIsImV4cGVydGlzZSI6IlB1YmxpYy1zcGVha2VyIiwiYWRkcmVzcyI6IlJ3YW5kYSIsInBvc2l0aW9uIjoidXNlciIsImlhdCI6MTU2Njg5MDU3NX0.P67BM0Gj4IeL54ovDiKeCwfXKBS1psWRxSW56P_020';

      it('should check for token allowed token', (done) => {
        chai.request(app)
          .patch('/api/v1/user/1')
          .set('authorization', tokenAdminErr)
          .then((res) => {
            res.body.status.should.be.equal(403);
            done();
          })
          .catch(err => done(err));
      });

      it('should check if user Id exists', (done) => {
        chai.request(app)
          .patch('/api/v1/user/20')
          .set('authorization', tokenAdmin)
          .then((res) => {
            res.body.status.should.be.equal(404);
            done();
          })
          .catch(err => done(err));
      });

      it('should check for unauthorized', (done) => {
        chai.request(app)
          .patch('/api/v1/user/3')
          .set('authorization', tokenAdmin)
          .then((res) => {
            res.body.status.should.be.equal(401);
            done();
          })
          .catch(err => done(err));
      });

      it('should check for route access', (done) => {
        chai.request(app)
          .patch('/api/v1/user/1')
          .set('authorization', tokenUser)
          .then((res) => {
            res.body.status.should.be.equal(403);
            done();
          })
          .catch(err => done(err));
      });

      it('should check for token header', (done) => {
        chai.request(app)
          .patch('/api/v1/user/1')
          .then((res) => {
            res.body.status.should.be.equal(403);
            done();
          })
          .catch(err => done(err));
      });

      it('should changer user to mentor', (done) => {
        chai.request(app)
          .patch('/api/v1/user/1')
          .set('authorization', tokenAdmin)
          .then((res) => {
            res.body.status.should.be.equal(200);
            done();
          })
          .catch(err => done(err));
      });
});