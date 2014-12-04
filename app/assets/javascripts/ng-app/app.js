angular
  .module('AngularRails', [
    'ngRoute',
    'templates'
    ]).config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'landing.html',
          controller: 'LandingCtrl'
        });
        $locationProvider.html5Mode(true);
    });