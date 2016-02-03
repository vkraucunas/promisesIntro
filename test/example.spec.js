var assert  = require('assert'),
    Example = require('../src/example');

describe('Example', function () {  
  describe('#simplePromise', function () {
    xit('returns OK when given true', function (done) {
      Example.simplePromise(true).then(function (result) {
        assert.equal(result, 'OK');
        done();
      });
    });

    xit('returns BAD when given false', function (done) {
      Example.simplePromise(false).then(function (result) {
        assert.equal(result, 'BAD');
        done();
      });
    });
  });

  describe('#add10Promise', function () {
    xit('adds 10 to the given number', function (done) {
      Example.add10Promise(15).then(function (result) {
        assert.equal(result, 25);
        done();
      });
    });

    xit('adds 10 to 0 when no number is given', function (done) {
      Example.add10Promise().then(function (result) {
        assert.equal(result, 10);
        done();
      });
    });
  });

  describe('#reject', function () {
    xit('rejects in a promise, returning whatever was given to it', function (done) {
      Example.
        reject(10).
        catch(function (result) {
          assert.equal(result, 10);
          done();
        });
    });
  });

  describe('#sum50', function () {
    xit('returns the number 50', function (done) {
      Example.sum50().then(function (result) {
        assert.equal(result, 50);
        done();
      });
    });
  });
});