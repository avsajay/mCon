//Admin part
app.controller('editConferenceCtrl', function($scope,$location, $rootScope, $http, $state) {

    $scope.edit= function(conferenceData1) {

      var conference_Name = conferenceData1.conference_Name;
      var conference_Location = conferenceData1.conference_Location;
      var conference_FromDate = conferenceData1.conference_FromDate;
      var conference_ToDate =conferenceData1.conference_ToDate;
      var conference_Description = conferenceData1.conference_Description;
	  var conference_Speakers=conferenceData1.conference_Speakers;
	  var conference_Agenda=conferenceData1.conference_Agenda
      var confDetails = {
        "_id": conference_Name,
        "conference_Name": conference_Name,
        "conference_Location": conference_Location,
        "conference_FromDate": conference_FromDate,
        "conference_ToDate": conference_ToDate,
        "conference_Description": conference_Description,
		"conference_Speakers":conference_Speakers,
		"conference_Agenda":conference_Agenda
      };
	  $http.post($rootScope.x+"updconference", confDetails).then(function(response) {

      //  console.log("Response " + response);
        if (response.data.error == undefined) {

        //  console.log("Success");
          $location.path("/menu-content/viewConference");
      //    console.log(JSON.stringify(response));
        } else {

      //    console.log("Error:");
        }

      })

    }
  })
