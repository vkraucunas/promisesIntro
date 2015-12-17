# Intro - `.then()` Hint

Let's take a look at what the test is doing:

```javascript
it('returns BAD when given false', function (done) {
  Example.simplePromise(false).then(function (result) {
    expect(result).toEqual('BAD');
    done();
  });
});
```

In looking at this test, we should be able to tell that:

* `Example.simplePromise()` should be returning a promise
* The expectation is on the `result` from the `.then()` statement

If you have a function that is returning a promise and passing the first test, try commenting out the test and adding a new one that looks like this:

```javascript
it('returns BAD when given false', function (done) {
  Example.simplePromise(false).then(function () {
    // nothing to see here...
  }, function (result) {
    expect(result).toEqual('BAD');
    done();
  });
});
```

This test should pass. What does this tell you about what `reject()` does? What might you add to make sure no matter what (resolve or reject) a value gets passed to the `.then()` inside of the test?

[[Back](step-1.md)]