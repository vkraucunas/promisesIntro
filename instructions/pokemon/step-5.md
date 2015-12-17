# Pokemon API - Multiple Requests

We're reaching the final few functions that will build out our Pokemon API. And, of course, it's going to get even more challenging!

The next function we're going to write is going to fill-in the Pokemon's abilities. Pokemon can have 1, 2, or 3 abilities and each have their own resource uri. The function `findPokemonAbilities` will return something that looks like the following:

```javascript
> PokemonAPI.findPokemonAbilities('luvdisc').then(function (res) { console.log(res) });
> { abilities:
     [ { created: '2013-11-03T15:05:59.550194',
            description: '',
            id: 33,
            modified: '2013-11-03T15:05:59.550156',
            name: 'Swift-swim',
            resource_uri: '/api/v1/ability/33/' },
          { created: '2013-11-03T15:05:59.651403',
            description: '',
            id: 93,
            modified: '2013-11-03T15:05:59.651368',
            name: 'Hydration',
            resource_uri: '/api/v1/ability/93/' } ],
       attack: 30,
       catch_rate: 0,
       created: '2013-11-03T15:05:41.947867',
       defense: 55,
      // a whole lot of other stuff...
  }
```

We won't know how many abilities a Pokemon has, other than that it should be less than 4 and more than 0. How can we plan for accepting an unknown number of abilities? There are a few different options here -- if you're getting stuck, implement the naive solution first and then refactor.

![Luvdisc - Why does this exist?](http://pokeapi.co/media/img/370.png)

* * *

##### Before moving on to the next section, answer the following:

1. Un-pend the tests for `findPokemonAbilities` and get the tests to pass!
  * If you're getting stuck or refactoring, try looking through the Bluebird docs. Is there any way to evaluate multiple Promises at once?

[[Back](step-4.md)] - [[Continue](step-6.md)]