process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let commmon_student_details = {"teachers": 
[
"teacher1@test.com",
"teacher2@test.com"
]
};
let notification_details = {"teacher": "teacher1@test.com", "notification": "Hello students! @student1@test.com @student2@test.com"};
let registration_details = {"teacher": "teacherken@gmail.com", "students":
[
"studentjon@example.com",
"studenthon@example.com"
]
};

let suspend_details = {"student":"studentjon@example.com"};

chai.use(chaiHttp);

describe('/POST register', () => {
    it('it should register the student to the specific teacher', (done) => {
      chai.request(server)
          .post('/api/register')
          .send(registration_details)
          .end((err, res) => {
                res.should.have.status(201);
                res.body.should.have.property("message").equal("Registered Successfully");
            done();
          });
    });
    it('it should return error when register', (done) => {
      chai.request(server)
          .post('/api/register')
          .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property("errors");
            done();
          });
    });
});
describe('/GET common students', () => {
  it('it should GET all the common students', (done) => {
    chai.request(server)
        .get('/api/commonstudents')
        .send(commmon_student_details)
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.have.property('data');
          done();
        });
  });
  it('it should return error', (done) => {
        chai.request(server)
            .get('/api/commonstudents')
            .send({})
            .end((err, res) => {
                  res.should.have.status(400);
                  res.body.should.have.property("errors");
              done();
            });
  });
});
describe('/POST suspend', () => {
  it('it should suspend the student', (done) => {
    chai.request(server)
        .post('/api/suspend')
        .send(suspend_details)
        .end((err, res) => {
              res.should.have.status(201);
              res.body.should.be.a('object');
          done();
        });
  });
  it('it should return error when suspend the student', (done) => {
    chai.request(server)
        .post('/api/suspend')
        .end((err, res) => {
              res.should.have.status(400);
              res.body.should.be.a('object');
              res.body.should.have.property("errors");
          done();
        });
  });
});
describe('/GET notify students', () => {
  it('it should GET all the students who will get notifications', (done) => {
    chai.request(server)
        .get('/api/retrievefornotifications')
        .send(notification_details)
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.have.property('data');
          done();
        });
  });
  it('it should return error when get notification students', (done) => {
    chai.request(server)
        .get('/api/retrievefornotifications')
        .end((err, res) => {
              res.should.have.status(400);
              res.body.should.have.property('errors');
          done();
        });
  });
});
