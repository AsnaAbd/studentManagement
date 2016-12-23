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
        controller: 'CommentsCtrl'
        })
      .when('/editProfile', {
        templateUrl: 'views/editProfile.html',
        controller: 'CommentsCtrl'
        })
      .when('/authentification', {
        templateUrl: 'views/authentification.html',
        controller: 'CommentsCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
