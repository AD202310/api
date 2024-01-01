const request = require('request');
let input = process.argv[2];
let search = input[0] + input[1] + input[2] + input[3];
// let search = input.substr(0, 4); - show error for some reason
let url = `https://api.thecatapi.com/v1/breeds/search?q=${search}`;

const breedFetcher = request(url, function(error, response, body) {
  const data = JSON.parse(body);
  console.log(data[0].description);
});

module.exports = { fetchBreedDescription };

