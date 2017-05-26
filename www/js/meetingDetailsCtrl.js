app.controller('meetingDetailsCtrl', function($scope, $http, $rootScope, $location, $ionicPopup) {

    var title = $rootScope.meeting1;

    //alert("Title="+title);
    $http.get($rootScope.x+"viewmeetings?title=" + title).then(function(response) {
      //alert(JSON.stringify(response.data));
      //console.log("Response: " + JSON.stringify(response.data));

      $rootScope.meetingData = response.data;
    //  console.log($rootScope.meetingData.meeting_Date);



      var meetingTitle = $rootScope.meetingData.meeting_Title;
      var conferenceName = $rootScope.conference;
      var username = $rootScope.name;
      var json = {
        "username": username,
        "meetingTitle": meetingTitle,
        "conferenceName": conferenceName
      }
    //  console.log(JSON.stringify(json));
      $http.post($rootScope.x+"viewmeetingnotes", json).then(function(response) {

      //  console.log("Response: " + JSON.stringify(response.data[0].notes));
        $rootScope.meetingData.meeting_notes = response.data[0].notes;

      })
    })
  })
