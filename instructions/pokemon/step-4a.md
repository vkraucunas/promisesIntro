# Pokemon API - Asynchronicity Hint

With the `findPokemonSprite` function, we have the challenge of building up a context but need to pass a somewhat unrelated Promise to it. That is, at this point we can create a function that gets the full Pokemon information, gets the resource uri for a sprite, and makes a new call to it -- but we'll be left with _only_ the sprite information, not the full Pokemon info with the sprite. How can we get around this?

There are a few ways! But consider the following two Promises:

```javascript
var happy = new Promise(function (resolve, reject) {
  resolve('Happy');
});

var birthday = new Promise(function (resolve, reject) {
  resolve('Birthday');
});
```

How can we use both of these promises to create the phrase `"Happy Birthday!"`? One way would be to do something like this:

```javascript
function happyBirthday () {
  var fullPhrase;
  return happy.then(function(word) {
    fullPhrase = word;
  }).then(function () {
    fullPhrase += ' ';
    return birthday;
  }).then(function (word) {
    fullPhrase += word;
  }).then(function () {
    return fullPhrase + '!';
  });
};
```

In this case we build up the variable `fullPhrase` outside of the Promise (but within the function) and then return it once everything in our Promise chain has been resolved. If you copy the above into a node repl and then run it, you should see:

```javascript
> happyBirthday().then(function (result) { console.log(result) });
> Happy Birthday!
```

This example is a bit contrived, but think back to our `findPokemonSprite` function. How can we use this information to help us build that function?

[[Back](step-4.md)]