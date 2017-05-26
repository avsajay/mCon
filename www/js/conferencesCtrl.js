//Admin part
app.controller('conferencesCtrl', function($http, $scope, $location, $rootScope, $timeout, $ionicLoading, $timeout){
    $scope.body = "#232527";
    $scope.successClass = "hide";
    $scope.loadingClass = "show";
    $scope.dataClass = "none";
    //console.log($rootScope.x+'listconferences');
    	$http.get($rootScope.x+'listconferences').then(function(response) {
		  $scope.successClass = "show";
      $scope.loadingClass = "hide";
      $timeout(function() {
        $scope.successClass = "hide";
        $scope.body = "#fff";
        $scope.dataClass = "block";
      }, 1100);
//alert(JSON.stringify(response));
    //  console.log(JSON.stringify(response));
      $scope.conferences_list = response.data;


      $scope.call = function(item) {
        $rootScope.conference = item.doc.conference_Name;

        $location.path("/menu-content/adminDashboard");
      }


    })

  })
