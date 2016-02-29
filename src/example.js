var request = require('request');

var simplePromise = function (boo) {
  return new Promise(function (resolve, reject) {
    boo ? resolve("OK") : reject("BAD");
    }).catch(function (result) {
      return result;
    });
};

var add10Promise = function(num) {
  return new Promise(function (resolve, reject) {
    if (num > 0) {
      num += 10;
      resolve(num);
    } else {
      reject(10);
    }
  }).catch(function (result) {
    return result;
  });
};

var reject = function(value) {
    return new Promise(function (resolve, reject) {
        return reject(value);
    });
};

var sum50 = function() {
    var num = 0;
    return new Promise(function (resolve, reject) {
        if (num < 50) {
            resolve(num+50);
        }
    }).catch(function(result) {
        return result;
    })
}


module.exports = {
  simplePromise: simplePromise,
  add10Promise: add10Promise,
  reject: reject,
  sum50: sum50
};

