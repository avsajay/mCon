app.controller('editSessionNotesCtrl', function($scope, $http, $location, $rootScope) {
    //$scope.params ={};
    $scope.edit = function(sessionData) {
      //console.log(JSON.stringify(sessionData));


      var _id = sessionData.session_Title;
      var session_Title = sessionData.session_Title;
      var session_Location = sessionData.session_Location;
      var session_Speaker = sessionData.session_Speaker;
        var session_SpeakerDesignation=sessionData.session_SpeakerDesignation;

      var editsessionDetails = {

        "_id": session_Title,
        "session_Title": session_Title,
        "session_Location": session_Location,
        "session_Speaker": session_Speaker,
        "session_SpeakerDesignation":session_SpeakerDesignation,
        "conference_name": $rootScope.conference

      };

    //  console.log("My testing: " + JSON.stringify(editsessionDetails));

      $http.post($rootScope.x+"sessionupd", editsessionDetails).then(function(response) {

      //  console.log("Response " + response);
        if (response.data.error == undefined) {

        //  console.log("Success");
          $location.path("/menu-content/sessionNotes");
        //  console.log(JSON.stringify(response));
        } else {

        //  console.log("Error:");
        }

      })
      // alert(JSON.stringify(editsessionDetails));

    }
  })
