app.controller('editemployeeCtrl', function($scope, $location, $http, $rootScope) {

      $scope.listPref = $rootScope.emp_list1;


    $scope.checkItems = [];

    $scope.print = function() {

    //  console.log($scope.checkItems);
    }

    $scope.save = function() {
      var assigned_array = [];
      for (i in $scope.checkItems) {
      //  console.log($scope.checkItems[i]);
        if ($scope.checkItems[i] == true) {
          assigned_array.push(i);
        }
      }
      var employees = assigned_array;
      //console.log(JSON.stringify(employees));
      var _id = $rootScope.meetingData.meeting_Title;
      var meeting_Title = $rootScope.meetingData.meeting_Title;
    //  console.log(JSON.stringify(meeting_Title));

      var editempDetails = {

        "_id": meeting_Title,
        "meeting_Title": meeting_Title,
        "employees": employees,
        "conference_name": $rootScope.conference

      };

    //  console.log("My testing: " + JSON.stringify(editempDetails));

      $http.post($rootScope.x+"editemp", editempDetails).then(function(response) {

      //  console.log("Response " + response);
        if (response.data.error == undefined) {

        //  console.log("Success");
          $location.path("/menu-content/meetingDetails");
        //  console.log(JSON.stringify(response));
        } else {

        //  console.log("Error:");
        }

      })


    }
  })
