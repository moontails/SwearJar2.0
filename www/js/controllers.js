angular.module('starter.controllers', [])

.controller('LoginCtrl', ['$scope', '$rootScope', '$state', '$q', 'Users',
  function($scope, $rootScope, $state, $q, Users) {

  $scope.data = {};
  //check login kanappa
  $scope.login = function() {
    var d = $q.defer();
    $("#login-failed").hide();

    Users.authenticateUser($scope.data.username, $scope.data.password)
    .then(function(success){
      $state.go('tab.home');
    }, function(error){
      console.log(JSON.stringify(error));
      $("#login-failed").show();
    });

  };
  //sign up madri!
  $scope.signup = function() {
    Users.createUser($scope.data.username, $scope.data.password);
  };

  $scope.setUser = function () {

  };

}])

.controller('QuestCtrl',['$scope', '$rootScope', '$state', 'Quests', function($scope, $rootScope, $state, Quests) {
  $scope.data = {};
  $scope.quests = Quests;
  $scope.addQuest = function() {
    console.log(JSON.stringify($scope.data));
    $scope.quests.$add($scope.data);
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
