//Admin part
app.controller('add_conf_logisticsCtrl', function($scope, $location,$rootScope, $http, $state) {
    $scope.params = {};
    $scope.add = function(params) {
		var OnsiteCoordinator_Name = params.OnsiteCoordinator_Name;
		var OnsiteCoordinator_Email=params.OnsiteCoordinator_Email;
		var OnsiteCoordinator_PhoneNumber=params.OnsiteCoordinator_PhoneNumber;
		var EventCoordinator_Name=params.EventCoordinator_Name;
		var EventCoordinator_Email=params.EventCoordinator_Email;
		var EventCoordinator_PhoneNumber=params.EventCoordinator_PhoneNumber;
		var Start_Date=params.Start_Date;
		var Start_Time=params.Start_Time;
		var Start_City=params.Start_City;
		var Start_Airlines=params.Start_Airlines;
		var Arrival_Date=params.Arrival_Date;
		var Arrival_Time=params.Arrival_Time;
		var Arrival_City=params.Arrival_City;
		var Arrival_Airlines=params.Arrival_Airlines;
		var HotelName=params.HotelName;
		var comments=params.comments;

		var  logisticsDetails = {
		"OnsiteCoordinator_Name":OnsiteCoordinator_Name,
		"OnsiteCoordinator_Email":OnsiteCoordinator_Email,
		"OnsiteCoordinator_PhoneNumber":OnsiteCoordinator_PhoneNumber,
		"EventCoordinator_Name":EventCoordinator_Name,
		"EventCoordinator_Email":EventCoordinator_Email,
		"EventCoordinator_PhoneNumber":EventCoordinator_PhoneNumber,
		"Start_Date":Start_Date,
		"Start_Time":Start_Time,
		"Start_City":Start_City,
		"Start_Airlines":Start_Airlines,
		"Arrival_Date":Arrival_Date,
		"Arrival_Time":Arrival_Time,
		"Arrival_City":Arrival_City,
		"Arrival_Airlines":Arrival_Airlines,
		"HotelName":HotelName,
		"comments":comments,
		  };
		  $rootScope.NewconferenceDetails.logistics =logisticsDetails;
		  //console.log(JSON.stringify(logisticsDetails));
		  $location.path("/menu-content/add_conf_emp");

    }
  })
