var client = require('ft-api-client')(eam48ke2mb5dr8xvm6d2v3qy);

client.search("Donald Trump").then(function (articles) {
  console.log(articles);
});
