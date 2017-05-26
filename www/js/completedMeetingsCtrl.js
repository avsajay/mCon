app.controller('completedMeetingsCtrl', function($scope, $http, $rootScope, $location, $ionicPopup) {
    var title = $rootScope.conference;
    var d = new Date();

    var year = d.getUTCFullYear();
    var month = ("0" + d.getDate()).slice(-2)
    var date = d.getUTCDate();
    var hour = d.getUTCHours();
    var min = d.getUTCMinutes();
    var sec = d.getUTCSeconds();
    var newDate =  year + "-" + month + "-" + date + "T" + hour + ":" + min + ":" + sec+".000Z";

    $http.get($rootScope.x+"previousmeet?conferenceName=" + title + "&meeting_Date=" + newDate).then(function(response) {
     // alert(JSON.stringify(response.data.rows));

      console.log(JSON.stringify(response));

      $scope.meetings_list = response.data;
	  console.log('meeting List'+$scope.meetings_list.meeting_Date);

      $scope.call = function(item) {
        $rootScope.meeting1 = item.meeting_Title;
        console.log(JSON.stringify(item));
        console.log(JSON.stringify($rootScope.meeting1));
        $location.path("/menu-content/meetingDetails");
      }
    })
  })
