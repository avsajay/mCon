app.controller('attendeeInformation2Ctrl', function($scope, $http, $rootScope, $location, $ionicPopup) {
    var email=$rootScope.attendee;
  //  console.log(email)

     $http.get($rootScope.x+"viewattendee?title=" + email).then(function(response) {

      $rootScope.profileData = response.data;
      if (response.data.image)
        $rootScope.card = response.data.image;
      if (response.data.image) {
         $scope.exist = 1;
      //   console.log("true");
       } else {
         $scope.exist = 0;
      //   console.log("false");
       }


     })
  })
