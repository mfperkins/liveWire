var client = require('ft-api-client')();

client.search("Donald Trump").then(function (articles) {
  console.log(articles);
});
