/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

describe('/PATCH Accept user request', () => {
    const tokenAdmin = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZmlyc3ROYW1lIjoiTkVOR08iLCJsYXN0TmFtZSI6IkFsbHkiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEhTa1RUQmw3TDl2V29ZRnN1bHpMeE9URWpjQS9XUTA5aEtBZU8uLmdYQjdDZllja1hTblEyIiwicG9zaXRpb24iOiJhZG1pbiIsImlhdCI6MTU2Njg5MDM0NX0.SXIZ2JIjV5BYk9IFBChgsJKe_TIHvjEFxbXbkUW3930';

    const tokenAdminErr = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZmlyc3ROYW1lIjoiTkVOR08iLCJsYXN0TmFtZSI6IkFsbHkiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEhTa1RUQmw3TDl2V29ZRnN1bHpMeE9URWpjQS9XUTA5aEtBZU8uLmdYQjdDZllja1hTblEyIiwicG9zaXRpb24iOiJhZG1pbiIsImlhdCI6MTU2Njg5MDM0NX0.SXIZ2JIjV5BYk9IFBChgsJKe_TIHvjEFxbXbkUW393';

    const tokenMentor = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3ROYW1lIjoiUGF0cmljayIsImxhc3ROYW1lIjoiUmVueSIsImVtYWlsIjoicGF0b3NAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkcjNYcHg2MFNUaFBzdjUuUEpoeXJST0dZRFVYZDZxRlQzT0VqajMzdVdsbzdQWGU4MC9PYlciLCJiaW8iOiJUZWFjaGVyIiwib2NjdXBhdGlvbiI6ImRldmVsb3BlciIsImV4cGVydGlzZSI6IlB1YmxpYy1zcGVha2VyIiwiYWRkcmVzcyI6IlJ3YW5kYSIsInBvc2l0aW9uIjoibWVudG9yIiwiaWF0IjoxNTY2ODkwNDk4fQ.eoxnYy8bAkpLFh6XJjdwIpgUhs2d3DLYzHZEjFNSu_s';

    const tokenMentorErr = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3ROYW1lIjoiUGF0cmljayIsImxhc3ROYW1lIjoiUmVueSIsImVtYWlsIjoicGF0b3NAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkcjNYcHg2MFNUaFBzdjUuUEpoeXJST0dZRFVYZDZxRlQzT0VqajMzdVdsbzdQWGU4MC9PYlciLCJiaW8iOiJUZWFjaGVyIiwib2NjdXBhdGlvbiI6ImRldmVsb3BlciIsImV4cGVydGlzZSI6IlB1YmxpYy1zcGVha2VyIiwiYWRkcmVzcyI6IlJ3YW5kYSIsInBvc2l0aW9uIjoibWVudG9yIiwiaWF0IjoxNTY2ODkwNDk4fQ.eoxnYy8bAkpLFh6XJjdwIpgUhs2d3DLYzHZEjFNSu_';

    const tokenUser = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiTXVnaXNoYSIsImxhc3ROYW1lIjoiQm9yaXMiLCJlbWFpbCI6ImJvbmhldXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkVFM2VDFEVjQwdUdFNjN2LlFZUnovT242Uy5scVd6dFVDNkhDa2MwbHA3SndaY1lZYW8uSjIiLCJiaW8iOiJUZWFjaGVyIiwib2NjdXBhdGlvbiI6IkRldmVsb3BlciIsImV4cGVydGlzZSI6IlB1YmxpYy1zcGVha2VyIiwiYWRkcmVzcyI6IlJ3YW5kYSIsInBvc2l0aW9uIjoidXNlciIsImlhdCI6MTU2Njg5MDU3NX0.P67BM0Gj4IeL54ovDiKeCwfXKBS1psWRxSW56P_020M';

    const tokenUserErr = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiTXVnaXNoYSIsImxhc3ROYW1lIjoiQm9yaXMiLCJlbWFpbCI6ImJvbmhldXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkVFM2VDFEVjQwdUdFNjN2LlFZUnovT242Uy5scVd6dFVDNkhDa2MwbHA3SndaY1lZYW8uSjIiLCJiaW8iOiJUZWFjaGVyIiwib2NjdXBhdGlvbiI6IkRldmVsb3BlciIsImV4cGVydGlzZSI6IlB1YmxpYy1zcGVha2VyIiwiYWRkcmVzcyI6IlJ3YW5kYSIsInBvc2l0aW9uIjoidXNlciIsImlhdCI6MTU2Njg5MDU3NX0.P67BM0Gj4IeL54ovDiKeCwfXKBS1psWRxSW56P_020';

    it('Err in auth', (done) => {
        chai.request(app)
        .patch('/api/v1/sessions/1/accept')
        .then((res) => {
            res.body.status.should.be.equal(403);
            done();
        }).catch(err => done(err));
    });

    it('Should check valid token', (done) => {
        chai.request(app)
        .patch('/api/v1/sessions/1/accept')
        .set('authorization', tokenMentorErr)
        .then((res) => {
            res.body.status.should.be.equal(403);
            done();
        })
        .catch(err => done(err));
    });

    it('Should check route access', (done) => {
        chai.request(app)
        .patch('/api/v1/sessions/1/accept')
        .set('authorization', tokenUser)
        .then((res) => {
            res.body.status.should.be.equal(403);
            done();
        })
        .catch(err => done(err));
    });

    it('Should check if session Id exists', (done) => {
        chai.request(app)
        .patch('/api/v1/sessions/10/accept')
        .set('authorization', tokenMentor)
        .then((res) => {
            res.body.status.should.be.equal(404);
            done();
        })
        .catch(err => done(err));
    });

    it('Should check if mentor Id in the session equal to mentor Id ', (done) => {
        chai.request(app)
        .patch('/api/v1/sessions/1/accept')
        .set('authorization', tokenMentor)
        .then((res) => {
            res.body.status.should.be.equal(401);
            done();
        })
        .catch(err => done(err));
    });

    it('Should check if session already accepted', (done) => {
        chai.request(app)
        .patch('/api/v1/sessions/3/accept')
        .set('authorization', tokenMentor)
        .then((res) => {
            res.body.status.should.be.equal(409);
            done();
        })
        .catch(err => done(err));
    });

    it('Should update status to accepted', (done) => {
        chai.request(app)
        .patch('/api/v1/sessions/2/accept')
        .set('authorization', tokenMentor)
        .then((res) => {
            res.body.status.should.be.equal(200);
            done();
        })
        .catch(err => done(err));
    });
});
