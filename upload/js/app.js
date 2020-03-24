'use strict';

/* App Module */
var photoAlbumApp = angular.module('photoAlbumApp', [
  'ngRoute',
  'cloudinary',
  'photoAlbumAnimations',
  'photoAlbumControllers',
  'photoAlbumServices'
]);

photoAlbumApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/photos', {
      templateUrl: 'partials/photo-upload.html',
      controller: 'photoUploadCtrl'
    }).otherwise({
      redirectTo: '/photos'
    });
  }]);

