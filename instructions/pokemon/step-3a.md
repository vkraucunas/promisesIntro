# Pokemon API - Find By Name Hint

Here is where Promises get even trickier. We've been using Promises in a very simplistic way to simply chain transformations. We have been able to return whatever we want and it'll happily be passed along to the next statement. However, in order to continue chains with asynchronous requests, we need to return asynchronous code as Promises.

Take the following example:

```javascript
resourceByName(name).then(function (resource) {
  var url = 'http://pokeapi.co' + resource.resource_uri;
  return request(url, function (error, response, body) {
    return body;
  });
});
```

You might expect this code to work fine. We have a Promise that should return an object with a `resource_uri` key which we should then be able to call in order to return the body. However, this code doesn't work -- instead we get errors when running the tests like:

```
Expected undefined to equal 'Pikachu'.
```

Why is this happening? Well, we're returning an asynchronous request which doesn't have any value (yet). The way to wait for asynchronous values is to use a Promise. So, we need to __return a Promise inside of the `.then()` to correctly chain these requests.__

[[Back](step-3.md)]