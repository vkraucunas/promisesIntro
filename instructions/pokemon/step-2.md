# Pokemon API - The First Step

The Pokeapi doesn't have a way to search for Pokemon by name; and, because we're not _total_ nerds, we can't recall every Pokemon by id. Let's create a function that will allow us to search for Pokemon by name.

What's the best way to do this? We can use the [/pokedex/1](http://pokeapi.co/docs/#pokedex) resource call to return a list of all of the Pokemon. Each Pokemon comes back with their name and their respective resource uri. For example:

```javascript
{
  "created": "2013-11-09T15:14:48.957604",
  "modified": "2013-11-09T15:14:48.957565",
  "name": "national",
  "pokemon": [
    {
      "name": "rattata",
      "resource_uri": "api/v1/pokemon/19/"
    },
    {
      "name": "charmander",
      "resource_uri": "api/v1/pokemon/4/"
    },
    {
      "name": "charmeleon",
      "resource_uri": "api/v1/pokemon/5/"
    },
    // etc.
  ]
}
```

For now, we're just going to create a function, using Promises, that returns the above object with just the `name` and `resource_uri`. For example:

```javascript
> PokemonAPI.resourceByName('jolteon').then(function (result) {
... console.log(result);
... });

> { name: 'jolteon', resource_uri: 'api/v1/pokemon/135/' }
```

The `resourceByName` function will become very useful to us later so that we can always search by name first!

##### __Important!__
There are some helper functions already in your `pokemon.js` file! Most of these are pretty self-explanatory, but the `fixResourceUri` function might not be. The Pokeapi is great but is unfortunately not consistent when it comes to returning resource_uris. When you make a call to `/pokedex/1` you'll see resource_uris like the ones above. However, other resource_uris come with the first forward slash. For example, from our Slowpoke example:

```json
"resource_uri": "/api/v1/pokemon/79/"
``` 

This function just adds the `/` so future calls will be correct. Consider using it for creating `resourceByName`.

![Jolteon - The spikiest Eevee evolution](http://pokeapi.co/media/img/135.png)

* * *

##### Before moving on to the next section, answer the following:

1. Remove the un-pend the two `resourceByName` tests and get both tests to pass.
  * Remember, the function will need to return a Promise in order to have a `.then()` function attached to it.
  * Is your data coming back in an odd format? Maybe you need to `JSON.parse()` it.
1. Create a new test similar to the first inside of `resourceByName` but with a new Pokemon you choose and get it to pass.
1. Use node-replay to record the response from the Pokeapi. Test that it works by disconnecting from the wifi and retrying your tests!

[[Back](step-1.md)] - [[Continue](step-3.md)]