angular
  .module('Eatup', [
    'ngRoute',
    'templates'
    ]).config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'landing.html',
          controller: 'GroupsCtrl'
        });
        $locationProvider.html5Mode(true);
    });