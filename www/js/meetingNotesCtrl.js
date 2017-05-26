app.controller('meetingNotesCtrl', function($scope, $http, $rootScope, $location, $ionicPopup) {

    $http.get($rootScope.x+"allmeetingnoteses").then(function(response){
    //  console.log(JSON.stringify(response));

      $rootScope.all_meeting_noteses = response.data;

      $scope.call = function(item) {

        $rootScope.meeting_notes_details = item;
        $location.path("/menu-content/meeting_notes_details");
      }
    })
  })
