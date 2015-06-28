angular.module('starter.backendServices', [])

.factory("Quests", function($firebaseArray) {
  var itemsRef = new Firebase("https://sizzling-fire-9071.firebaseio.com/quests");
  return $firebaseArray(itemsRef);
})

.factory("Users", function($firebaseArray) {
  var itemsRef = new Firebase("https://sizzling-fire-9071.firebaseio.com/users");
  return $firebaseArray(itemsRef);
});

// .factory('Firebase', function(){
//   var Firebase = {};
//
//   Firebase.getUserDetails = function(username, password) {
//     // Get user from mogo db.
//
//     var userDetails = {
//       name: "Pranav Moktali",
//       email: "pranav.moktali@gmail.com",
//       phone: "1232122",
//       username: "mokpro"
//     };
//
//     return userDetails;
//   };
//
//   Firebase.getQuests = function(username) {
//     // get quests from browser
//   }
//   return Firebase;
// });
