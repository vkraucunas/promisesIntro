# Pokemon API - Find By Name

There are likely a few different ways to correctly return the resource from the `/pokedex/1` end point. You should have done the following:

* Returned a promise
* Updated the resource_uri to correctly include a `/`
* If no Pokemon was found, return an empty object

One way might look like this:

```javascript
function resourceByName (name) {
  return new Promise(function (resolve, reject) {
    request(pokedexUrl, function (error, response, body) {
      if (error || !body) {
        reject('Failed.');
      } else {
        var json = JSON.parse(body);
        resolve(json);  
      };
    });
  }).
  catch(logError).
  then(function (pokedex) {
    var foundPokemon = pokedex.pokemon.filter(function (poke) {
      return poke.name === name.toLowerCase();
    })[0];

    if (foundPokemon) {
      foundPokemon.resource_uri = fixResourceUri(foundPokemon.resource_uri);
    };
    console.log(foundPokemon);
    return foundPokemon || { message: 'No Pokemon found' };
  }).
  catch(logError);
};
```

That's a pretty long function. I get the feeling we may be able to refactor this to be more modular.

> ##### Important!
> From this point on, these are going to get pretty challenging! If you're stuck, don't stress; Promises can be difficult to reason about when you're new to them. If you ever get stuck:
>
> * Take a step back: what's the problem you're trying to solve? Is there a "naive" solution you can try first and then attempt a more complex solution?
> * Add `.catch()` after every step in a Promise chain when you're stuck. Surface whatever errors you can!
> * How would you solve this problem without Promises? Work your way backwards from the solutions you already know.

While it's great we were able to return the name and the resource_uri of a Pokemon, we want more fun information like their stats! How will we be the very best, like no one every was, unless we can get some detailed information back about our Pokemon?

From the [Pokeapi homepage](http://pokeapi.co/), try a request to `/pokemon/23/`. You should see a lot more data than just a name and resource_uri:

```javascript
{ abilities:
   [ { name: 'intimidate', resource_uri: '/api/v1/ability/22/' },
     { name: 'shed-skin', resource_uri: '/api/v1/ability/61/' },
     { name: 'unnerve', resource_uri: '/api/v1/ability/127/' } ],
  attack: 60,
  catch_rate: 0,
  created: '2013-11-03T15:05:41.313816',
  defense: 44,
  descriptions:
   [ { name: 'ekans_gen_1',
       resource_uri: '/api/v1/description/353/' },
       ... ],
  egg_cycles: 0,
  egg_groups:
   [ { name: 'Dragon', resource_uri: '/api/v1/egg/14/' },
     { name: 'Ground', resource_uri: '/api/v1/egg/5/' } ],
  ev_yield: '',
  evolutions:
   [ { level: 22,
       method: 'level_up',
       resource_uri: '/api/v1/pokemon/24/',
       to: 'Arbok' } ],
  exp: 58,
  growth_rate: '',
  happiness: 0,
  height: '20',
  hp: 35,
  male_female_ratio: '',
  modified: '2013-11-23T13:13:24.317803',
  moves:
   [ { learn_type: 'tutor',
       name: 'Bind',
       resource_uri: '/api/v1/move/20/' },
       ... ],
  name: 'Ekans',
  national_id: 23,
  pkdx_id: 23,
  resource_uri: '/api/v1/pokemon/23/',
  sp_atk: 40,
  sp_def: 54,
  species: '',
  speed: 55,
  sprites: [ { name: 'ekans', resource_uri: '/api/v1/sprite/24/' } ],
  total: 0,
  types: [ { name: 'poison', resource_uri: '/api/v1/type/4/' } ],
  weight: '69' }
```

Wow! Look at all that information we got back! We'll want to create a new function, using our previous `resourceByName` function, that returns all of this information called `findPokemon`. Remember, from the last function we got the resource_uri we need in order to make an additional request to then get back this information!

![Ekans - The Pokemon for people who like shorts because they're easy to wear](http://pokeapi.co/media/img/23.png)

* * *

##### Before moving on to the next section, answer the following:

1. Un-pend the tests related to `findPokemon` and get them to pass.
  * If you're having trouble and/or are receiving undefined as the result in your tests, take a look at [this hint](step-3a.md).
1. Are you noticing any duplicated code? Try and __DRY__ up your requests!

[[Back](step-2.md)] - [[Continue](step-4.md)]