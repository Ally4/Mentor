# Mentor
___
## Description
** Mentor is an online platform regarding free mentorship for everyone logged into the platform, we vehemently believe that every is a genius, but for most of us we like guidance and people to hold our back whenever we may tend to fail, and that why we created this platform, to help everyone reach his/her full potential, enjoy the stay with us and remember : `WE ARE THE MUST, FOR THE BEST!.` **
[GH-pages](https://ally4.github.io/Mentor/UI)
[Heroku]https://the-mentorship.herokuapp.com/)
___
[![Build Status](https://travis-ci.com/Ally4/Mentor.svg?branch=develop)](https://travis-ci.com/Ally4/Mentor)
___
## Mentor`s endpoints on the localhost://4404

|     Methods       |     Endpoints                          |      Descriptions                                            | 
|-------------------|----------------------------------------|--------------------------------------------------------------|
|POST               |  `/api/v1/auth/signup`                 | For the user to signup                                       |
|POST               |  `/api/v1/auth/signin`                 |For the user to signin                                        |
|PATCH              |  `/api/v1/user/:userId`                |For the admin to change a user to a mentor                    |
|POST               |  `/api/v1/sessions`                    |For the users tor create their sessions to get their sessions |
|GET                |  `/api/v1/mentors/:mentorId`           |For the user and admin to getthe mentor by Id                 |
|GET                |  `/api/v1/mentors`                     |For the user to get mentors                                   |
|GET                |  `/api/v1/users`                       |For the admin to get users                                    |
|GET                |  `/api/v1/sessionsView`                |For the mentor viewing their sessions                         |
|PATCH              |  `/api/v1/sessions/:sessionId/reject`  |For the mentors rejecting their sessions                      |
|PATCH              |  `/api/v1/sessions/:sessionId/accept`  |For the mentors accepting their sessions                      | 

## For the setting up
### The prerequisites are:
1. node.js
1. postman

** After the cloning which is: git clone `https://github.com/Ally4/Mentor.git` in the terminal, you need to do the following **
1. Run `npm install`
1. Run `npm start` to test bellow endpoints in postman
1. Application listen on http://localhost:4404

### For the testing
Run `npm test`
___

> Regards to Andela 

> Andela bootcamp cycle 10

> NENGO Ally as the developer 
