angular.module('starter.controllers', [])

.controller('LoginCtrl', ['$scope', '$rootScope', '$state','LoginService', function($scope, $rootScope, $state, LoginService) {
  $scope.data = {};
  //check login kanappa
  $scope.login = function() {
    $("#login-failed").hide();
    var user = LoginService.checklogin($scope.data.username, $scope.data.password);
    console.log(user);
    if(user) {
      $scope.user = user;
      $state.go('tab.home');
    } else {
      $("#login-failed").show();
    }
  };
  //sign up madri!
  $scope.signup = function() {
    LoginService.signup($scope.data.username, $scope.data.password);
  };

  $scope.setUser = function () {
    Firebase.getUserDetails()
  };
}])

.controller('QuestCtrl',['$scope', '$rootScope', '$state', 'Quests', function($scope, $rootScope, $state, Quests) {
  $scope.data = {};
  $scope.quests = Quests;
  $scope.addQuest = function() {
    $scope.data.count = 0;
    var now = new Date();
    now.setDate(now.getDate() + parseInt($scope.data.duration));
    $scope.data.enddate = now;
    $scope.data.status = "active";
    console.log(JSON.stringify($scope.data));
    $scope.quests.$add($scope.data);
    $state.go('tab.home');
  };

  $scope.selectCharity = function() {
    $state.go('tab.search-charity');
  };


  $scope.addcount = function(quest) {
    for(var i=0; i < $scope.quests.length; i++){
      //console.log("Quest clicked", $scope.quests[i]["$id"]);
      if($scope.quests[i]["$id"] == quest["$id"]){
        $scope.quests[i].count += 1;
        break;
    }
  }
};

}])

.controller('CharityCtrl', ['$scope', '$rootScope', '$state', 'SearchService', function($scope, $rootScope, $state, SearchService) {
  $scope.query = {};
  $scope.results = {};
  $scope.data = $scope.data || {};
  console.log("Initial",$scope.query);
  //console.log("Hi");
  $scope.search = function() {
      console.log("!!");
      $scope.results = SearchService.search($scope.query.name)
      .then(function(response) {
        $scope.results = response;
      }, function(err){
        $scope.results.push = "No Results Found";
      });
      console.log("Received results "+ $scope.results.length);
  };

  $scope.onselect = function(name) {
    console.log("Selected Charity",name);

    $scope.$apply( function() {
        $scope.data.charity = name;
    });

    $("#CharityName").show();
    $("#CharityName").find('input').val(name);
    $("#CharityButton").hide();
    $state.go('tab.create-quest');
    //console.log("Selected " + name);
  };

}])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {

});
