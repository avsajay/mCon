app.controller('addSessionNotes1Ctrl', function($scope,$ionicPopup,$location, $http, $rootScope) {

    $scope.params = {};

    $scope.add = function(params) {
      var notes = params.notes;
      $rootScope.sessionDetails.notes = notes;

      var json = $rootScope.sessionDetails;
      $http.post($rootScope.x+"session", json).then(function(response) {
        if (response.data.error == undefined) {

        //  console.log("Success");
          $location.path("/menu-content/mySessions");

        } else {

        //  console.log("Error:");
        }

      })

    }

  })
