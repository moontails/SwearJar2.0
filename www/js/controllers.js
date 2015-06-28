angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, LoginService) {
  $scope.data = {};
  //check login kanappa
  $scope.login = function() {
    LoginService.checklogin($scope.data.username, $scope.data.password);
  };
  //sign up madri!
  $scope.signup = function() {
    LoginService.signup($scope.data.username, $scope.data.password);
  };
})

.controller('QuestCtrl', function($scope, QuestService) {
  $scope.data = {};

  //$scope.oncreate = QuestService.save($scope.data);
  $scope.oncreate = function() {
    console.log("Hi");
  };

  $scope.quests = QuestService.all();
})

.controller('DashCtrl', function($scope) {})
.controller('QuestCtrl', function($scope, QuestService) {
  $scope.data = {};
  $scope.oncreate = function() {
    QuestService.save($scope.data);
  };		
})

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

.controller('QuestCtrl', function($scope, QuestService) {

$scope.data = {};
$scope.oncreate = function() {
  QuestService.save($scope.data);
};
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
