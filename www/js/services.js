angular.module('starter.services', [])

.factory('LoginService', function($state, Firebase){
  return {
    // this is where we shall check if user already created
    checklogin: function(username, pwd) {
      // checks if user exists with username password combo
      // returns user details if exists
      // var userDetails = Firebase.getUserDetails(username, pwd);
      // console.log("username: " + username + " - password: " + pwd);
      // return userDetails;
      $state.go('tab.home')
    },
    // this is where we shall check to see if user exists and let them login
    signup: function(user, pwd) {
      console.log("user: " + user + " - password: " + pwd);
    }
  };
})

.factory('SearchService', function($q, $http) {
  return {
    search: function(terms) {
      var d = $q.defer();
      console.log("Searching");
      $http.get("https://api.justgiving.com/042ed0b8/v1/charity/search?q=" + terms)
      .then(function(resp) {
        console.log("search sucess");
        var results = resp.data.charitySearchResults;
        d.resolve(results);
        // For JSON responses, resp.data contains the result
      }, function(err) {
        d.reject(err);
        // err.status will contain the status code
      });
      //return ["just","giving"];
      // var xmlHttp = new XMLHttpRequest();
      // var theURL = "https://api.justgiving.com/042ed0b8/v1/charity/search?q="+terms.join("&");
      // xmlHttp.open( "GET", theUrl, false );
      // xmlHttp.send( null );
      // var charities = json.parse(xmlHttp.responseText).charitySearchResults;
      // var result = [];
      // for (var i=0; i<charities.length; i++) {
      //   result.push(charities[i].name);
      // }
      //return result;
      return d.promise
    }
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
