angular.module('starter.backendServices', [])

.factory('Firebase', function(){
  var Firebase = {};

  Firebase.getUserDetails = function(username, password) {
    // Get user from mogo db.

    var userDetails = {
      name: "Pranav Moktali",
      email: "pranav.moktali@gmail.com",
      phone: "1232122",
      username: "mokpro"
    };

    return userDetails;
  };

  Firebase.getQuests = function(username) {
    // get quests from browser
  }
  return Firebase;
});
