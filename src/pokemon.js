var request = require('request');

// Helper functions and variables

var pokedexUrl = 'http://pokeapi.co/api/v1/pokedex/1/';

function buildUrl (uri) {
  return 'http://pokeapi.co' + uri;
};

function fixResourceUri (uri) {
  return '/' + uri;
};

function logError (error) {
  console.log('Error', error);
  return error;
};

// your code here

module.exports = {};