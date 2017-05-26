//Admin part
app.controller('edit_conf_empCtrl', function($scope,$location, $rootScope, $http, $state) {

          $scope.listPref = $rootScope.emp_list1;
          //console.log(JSON.stringify($scope.listPref));
          $scope.checkItems = [];

          $scope.assignedColor = [];
          $scope.print = function() {


          //  console.log($scope.checkItems);
            $scope.assignedColor = $scope.checkItems;
            var assigned_array = [];
            for (i in $scope.checkItems) {

          //    console.log($scope.checkItems[i]);
              if ($scope.checkItems[i] == true) {
                assigned_array.push($scope.listPref[i - 1].doc);
              }
            }
            $rootScope.employees1 = assigned_array;

          }


    $scope.edit = function() {


      var editemp = {
		   "_id": $rootScope.conference,
		 "employees":$rootScope.employees1,
        "conference_Name": $rootScope.conference


      };
		//console.log(JSON.stringify(editemp));
      $http.post($rootScope.x+"updconfemp", editemp).then(function(response) {
        if (response.data.error == undefined) {

      //    console.log("Success");
          $location.path("/menu-content/view_employees");

        } else {

      //    console.log("Error:");
        }

      })

    }

  })
