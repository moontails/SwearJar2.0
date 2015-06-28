angular.module('starter.backendServices', [])

.factory("Quests", function($firebaseArray) {


  var itemsRef = new Firebase("https://sizzling-fire-9071.firebaseio.com/quests");
  return $firebaseArray(itemsRef);
})

.factory("Users", ['$q', function($q){
  var Users = {};
  var d = $q.defer();
  Users.createUser = function(username, password) {
    var ref = new Firebase("https://sizzling-fire-9071.firebaseio.com");
    ref.createUser({
      email: username + "@battlehack2015.com",
      password: password
    }, function(error, userData) {
      if (error) {
        d.reject(error)
        switch (error.code) {
          case "EMAIL_TAKEN":
            console.log("The new user account cannot be created because the email is already in use.");
            break;
          case "INVALID_EMAIL":
            console.log("The specified email is not a valid email.");
            break;
          default:
            console.log("Error creating user:", JSON.stringify(error));
        }
      } else {
        d.resolve(userData);
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });
    return d.promise;
  };


    Users.authenticateUser =function(username, password) {
      var d = $q.defer();
      var ref = new Firebase("https://sizzling-fire-9071.firebaseio.com");
      ref.authWithPassword({
        "email": username + "@battlehack2015.com",
        "password": password
      }, function(error, authData) {
        if (error) {
          d.reject(error)
          console.log("Login Failed!", JSON.stringify(error));
        } else {
          d.resolve(authData);
          console.log("Authenticated successfully with payload:", JSON.stringify(authData));
        }
      });

      return d.promise;
    };

    return Users;

  }]);
