 'use strict';

/**
 * @ngdoc overview
 * @name studentManagementApp
 * @description
 * # studentManagementApp
 *
 * Main module of the application.
 */
 var app = angular.module('studentManagementApp', [
    'ngRoute'
  ])
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'StudentCtrl'
       })
      .when('/createProfile', {
        templateUrl: 'views/createProfile.html',
        controller: 'ProfileCtrl'
        })
      .when('/editProfile', {
        templateUrl: 'views/editProfile.html',
        controller: 'ProfileCtrl'
        })
      .when('/authentification', {
        templateUrl: 'views/authentification.html',
        controller: 'MainCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
