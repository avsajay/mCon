app.controller('mySessionsCtrl', function($scope, $http, $rootScope, $location, $ionicPopup) {

    var title = $rootScope.conference;
    var username = $rootScope.name;


    console.log(JSON.stringify(title));


    $http.get($rootScope.x+"mineindex?conferenceName=" + title + "&username=" + username).then(function(response) {

      console.log("hiii");
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
