app.controller('editMeetingCtrl', function($scope, $location, $http, $rootScope) {

    //$scope.params ={};
    $scope.edit = function(meetingData) {
    //  console.log(JSON.stringify(meetingData));


      var _id = meetingData.meeting_Title;
      var meeting_Title = meetingData.meeting_Title;
      var meeting_Date = meetingData.meeting_Date;

      var meeting_FromTime = meetingData.meeting_FromTime;
      var meeting_ToTime = meetingData.meeting_ToTime;
      var Agenda = meetingData.Agenda;
      var meeting_Location = meetingData.meeting_Location;

      var editmeetingDetails = {

        "_id": meeting_Title,
        "meeting_Title": meeting_Title,
        "meeting_Date": meeting_Date,

        "meeting_FromTime": meeting_FromTime,
        "meeting_ToTime": meeting_ToTime,
        "Agenda": Agenda,
        "meeting_Location": meeting_Location,

        "conference_name": $rootScope.conference

      };


      $http.post($rootScope.x+"meetingupd", editmeetingDetails).then(function(response) {
        if (response.data.error == undefined) {

        //  console.log("Success");
          $location.path("/menu-content/meetingDetails");
        //  console.log(JSON.stringify(response));
        } else {

        //  console.log("Error:");
        }
      });
    };

  })
