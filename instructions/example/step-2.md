# Intro - `.catch()`

In order to get the first two tests inside of `spec/example.spec.js` to pass, you may have created a function like this one:

```javascript
function simplePromise (bool) {
  return new Promise(function (resolve, reject) {
    bool ? resolve('OK') : reject('BAD');
  }).then(function (result) {
    return result;
  }, function (result) {
    return result;
  });
};
```

In this example, `.then()` comes with two functions -- the first one gets called if `resolve()` is called while the second gets called if `reject()` gets called. Without having a `.then()`, the resolve path will pass its test but the reject path will not. This because we need something between to catch the reject path and return its value.

If we were to include the code from the test, the full Promise would look like this:

```javascript
return new Promise(function (resolve, reject) {
  bool ? resolve('OK') : reject('BAD');
}).then(function (result) {
  return result;
}, function (result) {
  return result;
}).then(function (result) {
  // expect(result).toEqual('OK');
});
```

We are chaining onto our Promise!

* * *

##### Before moving on to the next section, answer the following:

1. Why do you need the second function? Do you need the first function?
1. If you haven't already, refactor the above code with `.catch()` -- check out [the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) for more information on how it works.

[[Continue](step-3.md)]