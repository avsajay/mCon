app.controller('conferenceDashboardCtrl', function($http, $scope, $location, $rootScope, $timeout) {
	  //$rootScope.isAdmin = false;
	  if($rootScope.name =="admin"){
		$rootScope.isAdmin = false;
		//console.log("Admin="+$rootScope.isAdmin);
		//alert("Admin="+$rootScope.isAdmin)
	  }else{
		$rootScope.isAdmin = true;
		//console.log("Admin="+$rootScope.isAdmin);
		//alert("Admin="+$rootScope.isAdmin);
	  }
    $scope.body = "#232527";
    $scope.successClass = "hide";
    $scope.loadingClass = "show";
    $scope.dataClass = "none";
    var title = $rootScope.conference;

    $http.get($rootScope.x+"viewConf?conference_Name="+ title).then(function(response) {
      //alert(JSON.stringify(response.data));
      $scope.successClass = "show";
      $scope.loadingClass = "hide";
      $timeout(function() {
        $scope.successClass = "hide";
        $scope.body = "#fff";
        $scope.dataClass = "block";
      }, 1100);
      console.log("Response: " + JSON.stringify(response.data));
      $scope.conferenceData = response.data;

console.log('Date:'+$scope.conferenceData[0].conference_FromDate)
	 	 $scope.logisticsDetails=response.data[0].logistics;

	  $rootScope.employees=response.data[0].employees;
	 // alert("hi"+JSON.stringify($scope.employees));
	     $scope.callprofile= function(item) {
			 //alert("hello"+JSON.stringify(item));
			 $rootScope.item=item;
			 //alert("new data"+JSON.stringify($scope.item))

		   $location.path("/menu-content/profile");

      }
			$http.get("https://ibmcloudant01.cloudant.com/employee/_all_docs?include_docs=true").then(function(response) {
	//console.log("hi");
				$scope.emp_list1 = response.data.rows;
				var emp=$scope.emp_list1;
			//  console.log(JSON.stringify($scope.emp_list1.doc.email));
				//console.log(response.data.rows[0].doc.email);

				for(i=0;i< emp.length;i++){
					if($rootScope.name == emp[i].doc.email)
					{
						//alert( emp[i].doc.name);
						//console.log(emp[i].doc.image);
						$rootScope.emp_image=emp[i].doc.image
					}
					else{
					 console.log("false");

					}
				}




			})



    })
  })
