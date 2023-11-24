const request = require('request');
let input = process.argv[2];
let search = input.substr(0, 4);
let url = `https://api.thecatapi.com/v1/breeds/search?q=${search}`;
request(url, function(error, response, body) {
  console.log('error:', "This is not a cat breed!")
  const data = JSON.parse(body);
  console.log(data[0].description);
});


