//IIFE FOR VARIABLE ENCAPSULATION
(function() {
  angular.module('routerModule', ['ui.router'])
    .run(runRouter)
    .config(configRouter);
    runRouter.$inject = ['$state', '$rootScope', '$location', '$window']
    function runRouter($state, $rootScope, $location, $window) {
      $rootScope.$state = $state
    };
    configRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function configRouter($stateProvider, $urlRouterProvider, $locationProvider){
      // Setting html5Mode as true to remove hashtag
      $locationProvider.html5Mode(true);
      $stateProvider
        .state('home',{
          url: '/',
          templateUrl: 'partials/home.html',
          controller: 'lauraCtrl as lauraCtrl'
        })
        .state('projects',{
          url: '/projects',
          templateUrl: 'partials/projects.html',
          controller: 'lauraCtrl as lauraCtrl'
        })
        .state('publications',{
          url: '/publications',
          templateUrl: 'partials/publications.html',
          controller: 'lauraCtrl as lauraCtrl'
        })
        .state('experience',{
          url: '/experience',
          templateUrl: 'partials/experience.html',
          controller: 'lauraCtrl as lauraCtrl'
        })
        .state('activities',{
          url: '/activities',
          templateUrl: 'partials/activities.html',
          controller: 'lauraCtrl as lauraCtrl'
        })
        .state('contact',{
          url: '/contact',
          templateUrl: 'partials/contact.html',
          controller: 'lauraCtrl as lauraCtrl'
        });
      $urlRouterProvider.otherwise('/');
    };
}());
