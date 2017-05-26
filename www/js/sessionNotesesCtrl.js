app.controller('sessionNotesesCtrl', function($scope, $http, $rootScope, $location, $ionicPopup) {

    $http.get($rootScope.x+"allsessionnoteses").then(function(response){
    //  console.log(JSON.stringify(response));

      $rootScope.all_session_noteses = response.data;

      $scope.call = function(item) {

        $rootScope.session_notes_details = item;

        $location.path("/menu-content/session_notes_details");
      }
    })
  })
