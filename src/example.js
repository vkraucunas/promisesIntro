// your code here

var simplePromise1 = function (boolean) {
    return new Promise(function (resolve, reject) {
        if (boolean === true) {
            resolve('OK');
        } else {
            reject('BAD');
        }
    })
}

var simplePromise = simplePromise1().then(function(value) {
    return value;
}, function(err) {
    return err;
});








module.exports = Example.simplePromise;