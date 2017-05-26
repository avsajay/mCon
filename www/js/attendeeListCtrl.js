app.controller('attendeeListCtrl', function($scope, $http, $rootScope, $location, $ionicPopup) {
    console.log("hi");
    var title = $rootScope.conference;
    console.log("Title :" + title);
    console.log(JSON.stringify($rootScope.conference));
    $http.get($rootScope.x+"retrieve?hari=" + title).then(function(response) {


      // console.log(JSON.stringify(response));

      $scope.attendee_list = response.data;
      for (i = 0; i < $scope.attendee_list.length; i++) {

        if ($scope.attendee_list[i].attendee_type == 0)
          $scope.attendee_list[i].color = "#00aae7";
        if ($scope.attendee_list[i].attendee_type == 1)
          $scope.attendee_list[i].color = "#ef4048";
        if ($scope.attendee_list[i].attendee_type == 2)
          $scope.attendee_list[i].color = "#232527";

      }

      console.log(JSON.stringify($scope.attendee_list))
      $scope.call = function(item) {

        $rootScope.attendee = item.attendee_Email;
        //console.log(JSON.stringify(item));
        //console.log(JSON.stringify($rootScope.attendee));
        $location.path("/menu-content/attendeeInfo");
      }
    })
  })
