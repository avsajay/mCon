app.controller('editSessionNotes1Ctrl', function($scope, $location, $http, $rootScope) {

    $scope.edit = function(sessionData) {


      var notes = sessionData.notes;

      var editSessionNotesDetails = {

        "_id": $rootScope.session,

        "notes": notes,
        "conference_name": $rootScope.conference

      };
    //  alert(JSON.stringify(editSessionNotesDetails));
      $http.post($rootScope.x+"sessionupd1", editSessionNotesDetails).then(function(response) {
        if (response.data.error == undefined) {

        //  console.log("Success");
          $location.path("/menu-content/sessionNotes");

        } else {

        //  console.log("Error:");
        }

      })

    }
  })
