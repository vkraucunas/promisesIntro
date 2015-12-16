var PokemonAPI      = require('../src/pokemon'),
    Replay          = require('Replay');

Replay.fixtures = './spec/fixtures';

describe('PokemonAPI', function () {  
  describe('#resourceByName', function () {
    xit('can find a Pokemon by name', function (done) {
      PokemonAPI.resourceByName('charmander').then(function (result) {
        expect(result.name).toEqual('charmander');
        expect(result.resource_uri).toEqual('/api/v1/pokemon/4/');
        done();
      });
    });

    xit('returns an empty object if no pokemon exists', function (done) {
      PokemonAPI.resourceByName('optimus-prime').then(function (result) {
        expect(result.name).toEqual(undefined);
        done();
      });
    });
  });

  describe('#findPokemon', function () {
    xit('returns the full information for the pokemon given by name', function (done) {
      PokemonAPI.findPokemon('pikachu').then(function (result) {
        expect(result.name).toEqual('Pikachu');
        expect(result.attack).toEqual(55);
        expect(result.defense).toEqual(40);
        expect(result.sp_atk).toEqual(50);
        expect(result.sp_def).toEqual(50);
        expect(result.speed).toEqual(90);
        done();
      });
    });

    xit('returns an empty object if no pokemon exists', function (done) {
      PokemonAPI.findPokemon('megatron').then(function (result) {
        expect(result.name).toEqual(undefined);
        done();
      });
    });
  });

  describe('#original151', function () {
    xit('returns true if the pokemon\'s national_id is 151 or less', function (done) {
      PokemonAPI.original151('mew').then(function (result) {
        expect(result).toBe(true);
        done();
      });
    });

    xit('returns false if the pokemon\'s national_id above 151', function (done) {
      PokemonAPI.original151('chespin').then(function (result) {
        expect(result).toBe(false);
        done();
      });
    });
  });

  describe('#findPokemonSprite', function () {
    xit('returns the pokemon name and sprite image url for the given pokemon', function (done) {
      PokemonAPI.findPokemonSprite('gyarados').then(function (pokemon) {
        expect(pokemon.name).toEqual('Gyarados');
        expect(pokemon.image_url).toEqual('http://pokeapi.co/media/img/130.png');
        done();
      });
    });
  });

  describe('#findPokemonAbilities', function () {
    xit('returns all of the Pokemon\'s ability data for Pokemon with 1 ability', function (done) {
      PokemonAPI.findPokemonAbilities('arceus').then(function (result) {
        expect(result.name).toEqual('Arceus');
        expect(result.abilities[0].id).toEqual(121);
        expect(result.abilities[0].name).toEqual('Multitype');
        done();
      });
    });

    xit('returns all of the Pokemon\'s ability data for Pokemon with 2 abilities', function (done) {
      PokemonAPI.findPokemonAbilities('espeon').then(function (result) {
        expect(result.name).toEqual('Espeon');
        expect(result.abilities[0].id).toEqual(28);
        expect(result.abilities[0].name).toEqual('Synchronize');
        expect(result.abilities[1].id).toEqual(156);
        expect(result.abilities[1].name).toEqual('Magic-bounce');
        done();
      });
    });

    xit('returns all of the Pokemon\'s ability data for Pokemon with 3 abilities', function (done) {
      PokemonAPI.findPokemonAbilities('clefairy').then(function (result) {
        expect(result.name).toEqual('Clefairy');
        expect(result.abilities[0].id).toEqual(56);
        expect(result.abilities[0].name).toEqual('Cute-charm');
        expect(result.abilities[1].id).toEqual(98);
        expect(result.abilities[1].name).toEqual('Magic-guard');
        expect(result.abilities[2].id).toEqual(132);
        expect(result.abilities[2].name).toEqual('Friend-guard');
        done();
      });
    });
  });

  describe('#findPokemonLevelMoves', function () {
    xit('returns information for all the moves of a pokemon that can be learned by leveling up', function (done) {
      PokemonAPI.findPokemonLevelMoves('bidoof').then(function (result) {
        expect(result.name).toEqual('Bidoof');
        
        var moves = result.moves;
        expect(moves.length).toEqual(12);
        expect(moves[1].name).toEqual('Yawn');
        expect(moves[1].power).toEqual(0);
        expect(moves[3].name).toEqual('Rollout');
        expect(moves[3].power).toEqual(30);
        expect(moves[5].name).toEqual('Hyper-fang');
        expect(moves[5].power).toEqual(80);
        expect(moves[7].name).toEqual('Defense-curl');
        expect(moves[7].power).toEqual(0);
        expect(moves[9].name).toEqual('Take-down');
        expect(moves[9].power).toEqual(90);
        expect(moves[11].name).toEqual('Headbutt');
        expect(moves[11].power).toEqual(70);
        done();
      });
    });
  });
});