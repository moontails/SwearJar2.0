// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'firebase', 'starter.controllers', 'starter.services', 'starter.quest', 'starter.backendServices'])

.run(['$ionicPlatform', '$state', '$rootScope', '$http', 'Firebase',
    function($ionicPlatform, $state, $rootScope, $http, Firebase) {
    // authorization for server and required encoding for OrientDB REST API
    // $http.defaults.headers.common['Authorization'] = "basic YWRtaW46YWRtaW4=";
    // $http.defaults.headers.common['Accept-Encoding'] = "gzip,deflate";
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
        // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
    });


    // called on every state change
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        // console.log('$rootScope: '+JSON.stringify(Object.keys($rootScope)));
        // console.log("toState " + toState.name + ", session " + Session.data.status);
        // if (toState.authenticate && Session.data.status != "connected") {
        //     // if state requires authentication and user is not authenticated
        //     // console.log('LocalStorage: '+JSON.stringify(LocalStorage));
        //     if (LocalStorage.user_session){
        //         Session = LocalStorage.user_session;
        //         console.log("Restored user_session");
        //     } else {
        //         console.log("state requires authenticate and user not logged in");
        //         event.preventDefault();
        //         $state.go('login');
        //     }
        // }
    });

}])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  //added route to login/signup
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })


  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  .state('tab.create-quest', {
    url: '/create-quest',
    views: {
      'tab-create-quest': {
        templateUrl: 'templates/tab-create-quest.html',
        controller: 'QuestCtrl'
     }
   }
  })

  .state('tab.search-charity', {
    url: '/home/pay/search-charity',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-search-charity.html',
        controller: 'CharityCtrl'
      }
    }
  })
  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home':{
        templateUrl: 'templates/tab-home.html',
        controller: 'QuestCtrl'
      }
    }
  })

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

    .state('tab.pay', {
    url: '/home/pay',
    views: {
      'tab-home':{
        templateUrl: 'templates/payment.html',
        controller: 'PayCtrl'
      }
    }
  })


  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
