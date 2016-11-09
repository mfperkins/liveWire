$(document).ready(function() {
  $.post( "http://api.ft.com/content/search/v1?apiKey=", {  "queryString": "banks" }, function (data) {
    alert( "Data Loaded");
    $( "#current-headlines" ).html( data );
  });
});
