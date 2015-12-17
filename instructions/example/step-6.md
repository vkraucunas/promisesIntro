# Intro - Review

In this first part of the lesson we've learned about basic Promise syntax with ES6, the `.then()` and `.catch()` functions, chaining, and about how Promises can create branches of functions. We also implemented the Bluebird library to take our Promises to the next level. There's a ton more to learn which will be covered in the next, super effective [Pokemon API](http://pokeapi.co/) section. For now, try reading through these Promise chains and guess the final result;

* * *

##### Before moving on to the next section, guess the values of the following.

If you'd like to check your work, including the functions you've written in a node repl and include the following function:

```javascript
function log (num) { console.log(num) };
```

__Problem 1__
```javascript
add10Promise().
  then(reject).
  then(add10Promise).
  catch(function (num) {
   return num;
  }).
  then(log);
```

__Problem 2__
```javascript
add10Promise().
  then(add10Promise).
  then(reject).
  then(add10Promise).
  then(reject).
  then(add10Promise).
  then(add10Promise).
  catch(function (num) {
   return num;
  }).
  then(add10Promise).
  then(add10Promise).
  then(log);
```

__Problem 3__
```javascript
add10Promise(50).
  then(reject).
  then(add10Promise).
  catch(function (num) {
   return num;
  }).
  then(add10Promise).
  then(reject).
  catch(function (num) {
   return num;
  }).
  then(add10Promise).
  then(add10Promise).
  then(log);
```

__Problem 4__
```javascript
reject().
  then(add10Promise).
  then(reject).
  then(add10Promise).
  then(reject).
  then(add10Promise).
  then(add10Promise).
  catch(function (num) {
   return num;
  }).
  then(add10Promise).
  then(add10Promise).
  then(log);
```

__Problem 5__
```javascript
add10Promise(50).
  then(add10Promise).
  catch(function (num) {
   return num;
  }).
  then(reject).
  catch(function (num) {
   return num;
  }).
  then(add10Promise).
  catch(function (num) {
   return num;
  }).
  then(reject).
  then(add10Promise).
  catch(function (num) {
   return num;
  }).
  then(add10Promise).
  catch(function (num) {
   return num;
  }).
  then(add10Promise).
  then(add10Promise).
  then(log);
```

[[Back](step-5.md)]