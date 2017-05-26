app.controller('teamSessionsCtrl', function($scope, $http, $rootScope, $location, $ionicPopup) {
    var title = $rootScope.conference;
    var username = $rootScope.name;

    $http.get($rootScope.x+"teamindex?conferenceName=" + title + "&username=" + username).then(function(response) {
      //alert(JSON.stringify(response.data.rows));

      console.log(JSON.stringify(response));

      $scope.sessions_list = response.data;

      $scope.call = function(item) {
        $rootScope.session = item.session_Title;
        console.log(JSON.stringify(item));
        console.log(JSON.stringify($rootScope.session));
        $location.path("/menu-content/sessionNotes");
      }
    })
  })
