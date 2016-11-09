$(document).ready(function() {
  $.post( "http://api.ft.com/content/search/v1?apiKey=eam48ke2mb5dr8xvm6d2v3qy", {  "queryString": "banks" }, function (data) {
    alert( "Data Loaded");
    $( "#current-headlines" ).html( data );
  });
});
