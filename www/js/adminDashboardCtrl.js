//Admin part
app.controller('adminDashboardCtrl', function($http, $scope, $location, $rootScope, $timeout) {


    $scope.body = "#232527";
    $scope.successClass = "hide";
    $scope.loadingClass = "show";
    $scope.dataClass = "none";
    var title = $rootScope.conference;
    //alert("Title="+title);
    $http.get($rootScope.x+"viewConf?conference_Name="+ title).then(function(response) {
      //alert(JSON.stringify(response.data));
      $scope.successClass = "show";
      $scope.loadingClass = "hide";
      $timeout(function() {
        $scope.successClass = "hide";
        $scope.body = "#fff";
        $scope.dataClass = "block";
      }, 1100);
    //  console.log("Response: " + JSON.stringify(response.data[0]));
$rootScope.conferenceData1 = response.data[0];




	 	 $rootScope.logisticsDetails1=response.data[0].logistics;

	   // console.log(JSON.stringify($scope.logisticsDetails1));
	  $scope.employees1=response.data[0].employees;
    $scope.delete=function(){
  //  console.log($rootScope.conferenceData1._id+""+$rootScope.conferenceData1._rev);
      var deleteconference = {

        "_id": $rootScope.conferenceData1._id,
        "_rev":$rootScope.conferenceData1._rev

      };
    //  alert(JSON.stringify(deleteconference ));
      $http.post($rootScope.x+"delete_conf", deleteconference).then(function(response) {
    //   console.log(response);
       $location.path("/menu-content/conferences");
  })
}
   })

    })
