angular.module('starter.backendServices', [])

.factory('MongoDB', function(){
  var MongoDB = {};

  MongoDB.getUserDetails = function(username, password) {
    // Get user from mogo db.

    var userDetails = {
      name: "Pranav Moktali",
      email: "pranav.moktali@gmail.com",
      phone: "1232122",
      username: "mokpro"
    };

    return userDetails;
  };
  return MongoDB;
});
