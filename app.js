'use strict';
/* global app: true */


var app = angular.module('iitky12App', [
  'afkl.lazyImage',
  'angularUtils.directives.dirPagination',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

app.config(function ($routeProvider) 
{
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html'
    })
    .when('/about', {
      templateUrl: 'views/about.html'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
