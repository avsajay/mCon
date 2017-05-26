app.controller('addMeetingNotesCtrl', function($scope, $http, $rootScope, $location, $ionicPopup) {
    $scope.params = {};
    $scope.add = function(params) {



      var meeting_Notes = params.meeting_Notes;

      $rootScope.meetingData.username =$rootScope.name;
      $rootScope.meetingData.notes = meeting_Notes;
      $rootScope.meetingData.conference_name = $rootScope.conference;
      //console.log(JSON.stringify($rootScope.meetingData));

      $http.post($rootScope.x+"addMeetingNotes", $rootScope.meetingData).then(function(response) {
        if (response.data.error == undefined) {

        //  console.log("Success");
		$location.path("/menu-content/meetingDetails");
        //  console.log(JSON.stringify(response));
        } else {

        //  console.log("Error:");
        }

      })
      // alert(JSON.stringify(meetingNotesDetails));

    }
  })
