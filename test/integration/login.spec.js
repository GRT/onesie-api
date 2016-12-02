;

'use strict';

const hapi = require('hapi');
const onesie = require('../../lib');
const expect = require('chai').expect;
const wreck = require('wreck');

describe('Login controller', function(done) {
  beforeEach(function (next) {
    this.server = new hapi.Server();
    this.server.connection({port: 3000});
    this.server.register(onesie).then(() => {
      return this.server.start(next);
    });
  });

  afterEach(function (done) {
    this.server.stop(done);
  });

  it('should return ok with valid payload, with status 200', function (done) {
    const options = {
      payload: {
        username: 'testuser',
        password: 'testpassword'
      },
      json: true
    };
    wreck.post('http://localhost:3000/login', options, (error, response, payload) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return fail with invalid username, with status 400', function (done) {
    const options = {
      payload: {
        username: '',
        password: 'testpassword'
      },
      json: true
    };
    wreck.post('http://localhost:3000/login', options, (error, response, payload) => {
      expect(response.statusCode).to.equal(400);
      done();
    });
  });

  it('should return fail with invalid passowrd, with status 400', function (done) {
    const options = {
      payload: {
        username: 'testuser',
        password: ''
      },
      json: true
    };
    wreck.post('http://localhost:3000/login', options, (error, response, payload) => {
      expect(response.statusCode).to.equal(400);
      done();
    });
  });
});

