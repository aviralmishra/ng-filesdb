/*jslint node:true, mocha:true */

'use strict';

var request = require('supertest');
var app = require('../app').app;

describe('GET /', function () {
  it('responds with HTTP OK status', function (done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /api/files', function () {
  it('returns currently saved files', function (done) {
    request(app)
      .get('/api/files')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(function scanFiles(res) {
        // TODO: Check sizes of the files in the response here
      }).end(done);
  });
});
