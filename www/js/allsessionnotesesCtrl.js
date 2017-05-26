app.controller('SessionNotesesCtrl', function($scope, $http, $rootScope, $location, $ionicPopup) {

    $http.get($rootScope.x+"allsessionnoteses").then(function(response){
    //  console.log(JSON.stringify(response));
//alert(hi)
      $rootScope.all_session_noteses = response.data;

      $scope.call = function(item) {
        $rootScope.session = item.session_Title;
      //  console.log(JSON.stringify(item));
      //  console.log(JSON.stringify($rootScope.session));
        $location.path("/menu-content/view_session_notes");
      }
    })
  })
