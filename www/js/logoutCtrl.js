app.controller('logoutCtrl', function($scope, $state, $ionicHistory, $timeout) {
  $scope.logout = function() {


          console.log("clear cache");
            $ionicHistory.clearCache();

  $state.go('loginPage');
  }
})
