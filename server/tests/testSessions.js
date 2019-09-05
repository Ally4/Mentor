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

describe('/GET Sessions', () => {
    const tokenAdmin = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZmlyc3ROYW1lIjoiTkVOR08iLCJsYXN0TmFtZSI6IkFsbHkiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEVUTXp4a0dPdzl6SnRyajFlOExna3VLTFgvODRpclhqNVo5bDlXT2hSUWQuR1hUQ2NhcnA2IiwicG9zaXRpb24iOiJhZG1pbiIsImlhdCI6MTU2NzE3OTA3NX0.J2PLIHkYveQ1GLySHOsKOYEH5xKKUSBJyuHByqoufV8';

    const tokenAdminErr = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZmlyc3ROYW1lIjoiTkVOR08iLCJsYXN0TmFtZSI6IkFsbHkiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEVUTXp4a0dPdzl6SnRyajFlOExna3VLTFgvODRpclhqNVo5bDlXT2hSUWQuR1hUQ2NhcnA2IiwicG9zaXRpb24iOiJhZG1pbiIsImlhdCI6MTU2NzE3OTA3NX0.J2PLIHkYveQ1GLySHOsKOYEH5xKKUSBJyuHByqoufV';

    const tokenMentor = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3ROYW1lIjoiUGF0cmljayIsImxhc3ROYW1lIjoiUmVueSIsImVtYWlsIjoicGF0b3NAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkaVNMSWx1YVdiaTluWUZWSnc4blk1dWtTUTFLc0RzQnQ4Mm9lQlVGT3FxcTBlUWx0N3FTQXkiLCJiaW8iOiJUZWFjaGVyIiwib2NjdXBhdGlvbiI6ImRldmVsb3BlciIsImV4cGVydGlzZSI6IlB1YmxpYy1zcGVha2VyIiwiYWRkcmVzcyI6IlJ3YW5kYSIsInBvc2l0aW9uIjoibWVudG9yIiwiaWF0IjoxNTY3MTc5MDAzfQ.OeeYnleQb47QSKE4w2GcPaqbF_-2mLI8J5E_PJDheWI';

    const tokenMentorErr = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3ROYW1lIjoiUGF0cmljayIsImxhc3ROYW1lIjoiUmVueSIsImVtYWlsIjoicGF0b3NAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkaVNMSWx1YVdiaTluWUZWSnc4blk1dWtTUTFLc0RzQnQ4Mm9lQlVGT3FxcTBlUWx0N3FTQXkiLCJiaW8iOiJUZWFjaGVyIiwib2NjdXBhdGlvbiI6ImRldmVsb3BlciIsImV4cGVydGlzZSI6IlB1YmxpYy1zcGVha2VyIiwiYWRkcmVzcyI6IlJ3YW5kYSIsInBvc2l0aW9uIjoibWVudG9yIiwiaWF0IjoxNTY3MTc5MDAzfQ.OeeYnleQb47QSKE4w2GcPaqbF_-2mLI8J5E_PJDheW';

    const tokenUser = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiTXVnaXNoYSIsImxhc3ROYW1lIjoiQm9yaXMiLCJlbWFpbCI6ImJvbmhldXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkLkd5TXkwaVc4Y2ZXNS5nT3g0STNCZW0waTlGSXFTRTAyTXB2S2VPemk3YzlIZ1dzaDF4NXUiLCJiaW8iOiJUZWFjaGVyIiwib2NjdXBhdGlvbiI6IkRldmVsb3BlciIsImV4cGVydGlzZSI6IlB1YmxpYy1zcGVha2VyIiwiYWRkcmVzcyI6IlJ3YW5kYSIsInBvc2l0aW9uIjoidXNlciIsImlhdCI6MTU2NzE3ODkyN30.66PfwpkTTDHHn9Og8EZ09BTPeozkpmbTn8hUwyTryW8';

    const tokenUserErr = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiTXVnaXNoYSIsImxhc3ROYW1lIjoiQm9yaXMiLCJlbWFpbCI6ImJvbmhldXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkLkd5TXkwaVc4Y2ZXNS5nT3g0STNCZW0waTlGSXFTRTAyTXB2S2VPemk3YzlIZ1dzaDF4NXUiLCJiaW8iOiJUZWFjaGVyIiwib2NjdXBhdGlvbiI6IkRldmVsb3BlciIsImV4cGVydGlzZSI6IlB1YmxpYy1zcGVha2VyIiwiYWRkcmVzcyI6IlJ3YW5kYSIsInBvc2l0aW9uIjoidXNlciIsImlhdCI6MTU2NzE3ODkyN30.66PfwpkTTDHHn9Og8EZ09BTPeozkpmbTn8hUwyTryW';

    it('Err in auth', (done) => {
        chai.request(app)
        .get('/api/v1/sessionsView')
        .then((res) => {
            res.body.status.should.be.equal(403);
            done();
        }).catch(err => done(err));
    });

    it('Should check valid token', (done) => {
        chai.request(app)
        .get('/api/v1/sessionsView')
        .set('authorization', tokenMentorErr)
        .then((res) => {
            res.body.status.should.be.equal(401);
            done();
        })
        .catch(err => done(err));
    });

    it('Should check route access', (done) => {
        chai.request(app)
        .get('/api/v1/sessionsView')
        .set('authorization', tokenUser)
        .then((res) => {
            res.body.status.should.be.equal(403);
            done();
        })
        .catch(err => done(err));
    });

    it('Should get sessions', (done) => {
        chai.request(app)
        .get('/api/v1/sessionsView')
        .set('authorization', tokenMentor)
        .then((res) => {
            res.body.status.should.be.equal(200);
            done();
        })
        .catch(err => done(err));
    });
});