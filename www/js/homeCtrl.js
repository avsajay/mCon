app.controller('homeCtrl', function($http, $scope, $location, $rootScope, $timeout, $ionicLoading, $timeout) {
	console.log("1");

    $scope.body = "#232527";
    $scope.successClass = "hide";
    $scope.loadingClass = "show";
    $scope.dataClass = "none";
	//var email=$rootScope.name;
	//alert(name);
    //$timeout(function(){  $scope.successClass="show";$scope.loadingClass="hide";$timeout(function(){  $scope.successClass="hide";$scope.body="#fff"}, 1100);}, 3000);
	$http.get($rootScope.x+"listconferences").then(function(response) {

      $scope.conferences_list = response.data;
	  $scope.listOfconf=[];
	  //console.log(response.data[0].doc.conference_FromDate);

	   for(i=0;i< $scope.conferences_list.length;i++){
		  // console.log("i="+i);
		  // console.log($scope.conferences_list[i].doc.employees.length);
		   for(j=0;j<$scope.conferences_list[i].doc.employees.length;j++){
			 //  console.log("j="+j +" "+ $rootScope.name);
			 //  console.log($scope.conferences_list[i].doc.employees[j].email);
			   if($rootScope.name == $scope.conferences_list[i].doc.employees[j].email){
				//	console.log($scope.conferences_list[i].id);
				//	console.log($scope.conferences_list[i].doc.conference_FromDate);
					var confData = {
						"conf_name" : $scope.conferences_list[i].doc.conference_Name,
						"fromDate": $scope.conferences_list[i].doc.conference_FromDate,
						"toDate" :$scope.conferences_list[i].doc.conference_ToDate,
						"image":$scope.conferences_list[i].doc.image
					}
					$scope.listOfconf.push(confData);
					//console.log("Pushed"+$scope.listOfconf[i])
				}
				else{
        console.log("else");
				}
		   }

		 //  console.log(JSON.stringify($scope.conferences_list[i].doc.employees[i].email));
		  }

	  for(i=0;i<$scope.listOfconf.length;i++){
		  console.log("Pushed"+$scope.listOfconf[i].conf_name);
	  }
	  //alert(JSON.stringify($scope.listOfconf));

      $scope.successClass = "show";
      $scope.loadingClass = "hide";
      $timeout(function() {
        $scope.successClass = "hide";
        $scope.body = "#fff";
        $scope.dataClass = "block";
      }, 1100);
      $scope.viewConference = function(item) {
		  //alert("hi");

		$rootScope.conference = item.conf_name;
		console.log(JSON.stringify($rootScope.conference));
      $location.path("/menu-content/conferenceDashboard");
      }
  })

  })
