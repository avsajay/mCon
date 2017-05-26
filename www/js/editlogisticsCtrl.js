//Admin part
app.controller('editlogisticsCtrl', function($scope, $location,$rootScope, $http, $state) {

    $scope.edit= function(logisticsDetails1) {
		var OnsiteCoordinator_Name =logisticsDetails1.OnsiteCoordinator_Name;

		var OnsiteCoordinator_Email=logisticsDetails1.OnsiteCoordinator_Email;
		var OnsiteCoordinator_PhoneNumber=logisticsDetails1.OnsiteCoordinator_PhoneNumber;
		var EventCoordinator_Name=logisticsDetails1.EventCoordinator_Name;
		var EventCoordinator_Email=logisticsDetails1.EventCoordinator_Email;
		var EventCoordinator_PhoneNumber=logisticsDetails1.EventCoordinator_PhoneNumber;
		var Start_Date=logisticsDetails1.Start_Date;
		var Start_Time=logisticsDetails1.Start_Time;
		var Start_City=logisticsDetails1.Start_City;
		var Start_Airlines=logisticsDetails1.Start_Airlines;
		var Arrival_Date=logisticsDetails1.Arrival_Date;
		var Arrival_Time=logisticsDetails1.Arrival_Time;
		var Arrival_City=logisticsDetails1.Arrival_City;
		var Arrival_Airlines=logisticsDetails1.Arrival_Airlines;
		var HotelName=logisticsDetails1.HotelName;
		var comments=logisticsDetails1.comments;

		 var logistics = {
		"_id": $rootScope.conference,
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
		"conference_Name": $rootScope.conference
		  };


		    $http.post($rootScope.x+"updconflogistics", logistics).then(function(response) {
        if (response.data.error == undefined) {

        //  console.log("Success");
          $location.path("/menu-content/logistics");

        } else {

      //    console.log("Error:");
        }

      })

    }
  })
