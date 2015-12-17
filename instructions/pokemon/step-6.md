# Pokemon API - Promise.all

There are a few solutions for solving the previous problem. A longer solution would require us to string together a chain of `.then()` functions decide what to do based on whether or not all of remaining abilities have been requested for their full contents. The functions inside of the `.then()`s could reject if there are no more abilities to query, otherwise it would continue the chain. For example:

```javascript
return findPokemon(name).then(function (pokemon) {
  response = pokemon;
    
  var ability = response.abilities.shift();
    
  return requestPromise(buildUrl(ability.resource_uri));
}).then(collectAbilities).
   then(collectAbilities).
   then(collectAbilities).
   then(collectAbilities).
   catch(function (result) {
    if (result.complete) {
      response.abilities = abilities;
      return response;
    } else {
      console.log('Error:', result);
      return result;
    }
  });
```

The `collectAbilities` function would provide that branching spoken about above.

However, there's an easier alternative to doing this which is to use `Promise.all`. [This method](http://bluebirdjs.com/docs/api/promise.all.html) iterates over all the Promises contained inside of an array and returns a Promise to continue the chain.

This means that for our last function, this works:

```javascript
function findPokemonAbilities (name) {
  var response;
  
  return findPokemon(name).
    then(function (pokemon) {
      var promises = mapRequestPromises(pokemon.abilities);
          response = pokemon;
      
      return Promise.all(promises);
    }).then(function (abilities) {
      response.abilities = abilities;
      return response;
    }).catch(logError);
};
```

Where `mapRequestPromises` maps over an array and creates Promises that requests the resource.

Let's put this new method to use by creating a function that returns all of the moves a Pokemon can learn by leveling up. Our `findPokemonLevelMoves` function will transform this:

```javascript
moves:
   [ { learn_type: 'tutor',
       name: 'Drain-punch',
       resource_uri: '/api/v1/move/409/' },
     { learn_type: 'level up',
       level: 53,
       name: 'Focus-punch',
       resource_uri: '/api/v1/move/264/' },
       // more stuff goes here...
```

Into the fully realized version of those moves while _removing_ all moves that don't have a `learn_type` of `level up`.

```javascript
> PokemonAPI.findPokemonLevelMoves('conkeldurr').then(function (res) { console.log(res) });
> moves:
  [ { accuracy: 100,
      category: '',
      created: '2013-11-03T15:06:10.177598',
      description: 'Inflicts regular damage.  If the user takes damage this turn before hitting, this move will fail.\n\nThis move cannot be copied by mirror-move, nor selected by assist, metronome, or sleep-talk.',
      id: 264,
      modified: '2013-12-24T15:24:31.209656',
      name: 'Focus-punch',
      power: 150,
      pp: 20,
      resource_uri: '/api/v1/move/264/' }
    // many more moves...
```

This means you'll need to first filter the moves and then construct an array of Promises based on the resource uris of the Pokemon's moves.

![Conkeldurr - The upstairs neighbor Pokemon](http://pokeapi.co/media/img/534.png)

* * *

##### Before moving on to the next section, answer the following:

1. Un-pend the tests for `findPokemonLevelMoves` and get the tests to pass!
1. Are you noticing any duplicated code? Try and __DRY__ up your requests!