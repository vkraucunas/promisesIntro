# Pokemon API - Asynchronicity

Did you find implementing `findPokemon` challenging? Remember that an HTTP request is an asynchronous action and therefore must be wrapped in a Promise in order to chain effectively. However, we can happily mix asynchronous and synchronous code with Promises to return our desired result.

To practice this, we're going to create two new functions that give us some more information about Pokemon we're searching for in the wild. The first function, `original151` will tell us if the Pokemon appeared in the first generation of the games. We can do this by checking for `national_id` key on the object returned from `findPokemon`. The function should return true if the `national_id` is less than or equal to 151; otherwise, return false. For example:

```javascript
> PokemonAPI.original151('abra').then(function(result) { console.log(result) });
> true

> PokemonAPI.original151('grumpig').then(function(result) { console.log(result) });
> false
```

The second function we'll build, called `findPokemonSprite`, will attach an `image_url` key with the full image url to the overall data structure returned from `findPokemon`. This means we'll need to make an additional request to the nested `resource_uri` inside of the `sprites` key (use the first available one). For example:

```javascript
> PokemonAPI.findPokemonSprite('bronzong').then(function(result) { console.log(result) });
> { abilities:
   [ { name: 'levitate', resource_uri: '/api/v1/ability/26/' },
     { name: 'heatproof', resource_uri: '/api/v1/ability/85/' },
     { name: 'heavy-metal', resource_uri: '/api/v1/ability/134/' } ],
  attack: 89,
  catch_rate: 0,
  created: '2013-11-03T15:05:42.057300',
  // a whole bunch of other stuff...
  image_url: 'http://pokeapi.co/media/img/437.png' }
```

For both of these functions, consider what needs to be wrapped with a Promise and what doesn't need to be.

![Abra - The super annoying to catch Pokemon](http://pokeapi.co/media/img/63.png)
![Grumpig - The psychic bacon Pokemon](http://pokeapi.co/media/img/326.png)
![Bronzong - The Pokemon paperweight](http://pokeapi.co/media/img/437.png)

* * *

##### Before moving on to the next section, answer the following:

1. Un-pend the tests related to both `original151` and `findPokemonSprite` and then get them to pass.
  * If you're having trouble with implementing `findPokemonSprite`, check out [this hint](step-4a).
1. Are you noticing any duplicated code? Try and __DRY__ up your requests!

[[Back](step-3.md)] - [[Continue](step-5.md)]