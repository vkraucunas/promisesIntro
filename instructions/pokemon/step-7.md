# Pokemon API - Review

In this second part of the lesson, we've learned about chaining asynchronous requests, testing requests with node-replay, how to resolve (or reject) multiple Promises at once, and how to build up data structures based on the results from Promises. You now have a solid command of how Promises work as well as some real-life scenarios.

Want more practice? The functions we've made have all relied on `findPokemon`; however, they could be chainable. Imagine a method like so:

`findPokemon('espurr').withMoves().withAbilities().withSpriteUrl()`

This would ideally return the Pokemon, all of the realized moves, the realized abilities, and the sprite URL. There shouldn't be too many changes needed to make this. Can you think of how you might do it?

* * *

##### Extra Resources

* [Introduction to ES6 Promises](http://jamesknelson.com/grokking-es6-promises-the-four-functions-you-need-to-avoid-callback-hell/)
* [Promises - In Wicked Detail](http://www.mattgreer.org/articles/promises-in-wicked-detail/)
* [Promises/A+ Standard](https://promisesaplus.com/)
* [We have a problem with promises](http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)

[[Back](step-6.md)]