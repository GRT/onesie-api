'use strict';

const hapi = require('hapi');
const onesie = require('../../lib');
const expect = require('chai').expect;

const wreck = require('wreck');

describe('Status controller', function(done) {
  beforeEach(function(next) {
    this.server = new hapi.Server();
    this.server.connection({ port: 3000 });
    this.server.register(onesie).then(() => {
      return this.server.start(next);
    });
  });

  afterEach(function(done) {
    this.server.stop(done);
  });

  it('should return ok, with status 200', function(done) {
	wreck.get('http://localhost:3000/status', { json: true}, (error, response, payload) => {
      expect(payload).to.have.property('status','ok');
      expect(response.statusCode).to.equal(200);
      done();
	});
  });
});
