'use strict';

app.controller('AppCtrl', function ($scope,$rootScope) 
{
    $scope.loadSettings = function()
    {
      $rootScope.showLoad=false;
      $.getJSON("settings.json", function(json) 
      {
        $rootScope.SETTINGS=json;
        $scope.$apply();
      });
    };
});

