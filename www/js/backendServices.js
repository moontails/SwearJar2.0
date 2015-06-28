angular.module('starter.backendServices', [])
.factory('MongoDB', function() {
  var MongoDB = {};

  // need db details
  var rootUrl  = "http://localhost:2480";
  var dbname = "NetworkLabs";

  var functionUrlGenerator = function() {
    // parameters:
    // 0: function name
    // 1 onwards: sql function parameters
    var functionUrl = rootUrl + "/function/" + dbname + "/";
    // var functionUrl = rootUrl + "/function/networklabs/";

    functionUrl = functionUrl + arguments[0];

    for(var i=1; i < arguments.length; i++) {
        functionUrl  = functionUrl + "/" + arguments[i];
    }
    return functionUrl;
  }

  
}
