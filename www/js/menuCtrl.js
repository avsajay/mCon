app.controller('menuCtrl', function($scope,$state,$rootScope,$ionicHistory,$location,$timeout, $stateParams) {
 if($rootScope.name =="admin"){
		$rootScope.ismenu = false;
		//console.log("Admin="+$rootScope.isAdmin);
		//alert("Admin="+$rootScope.isAdmin)
	  }else{
		$rootScope.ismenu = true;
		//console.log("Admin="+$rootScope.isAdmin);
		//alert("Admin="+$rootScope.isAdmin);
	  }
       $scope.call = function() {
      $state.go('login');
      $timeout(function () {
          $ionicHistory.clearCache();
      }, 200)
}

    }
  )
