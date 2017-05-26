//Admin part
app.controller('add_conf_empCtrl', function($scope,$location, $rootScope, $http, $state) {

          $scope.listPref = $rootScope.emp_list1;
          //console.log(JSON.stringify($scope.listPref));
          $scope.checkItems = [];

          $scope.print = function() {


            console.log($scope.checkItems);
            $scope.assignedColor = $scope.checkItems;
            var assigned_array = [];
            for (i in $scope.checkItems) {

              console.log($scope.checkItems[i]);
              if ($scope.checkItems[i] == true) {
                assigned_array.push($scope.listPref[i - 1].doc);
              }
            }
            $rootScope.employees = assigned_array;

          }

    $scope.params = {};

    $scope.save = function(params) {
      var emp = $rootScope.employees;

    $rootScope.NewconferenceDetails.employees = emp;
      var json = $rootScope.NewconferenceDetails;
 //console.log(JSON.stringify(json));
      $http.post($rootScope.x+'addconference', json).then(function(response) {
        if (response.data.error == undefined) {

        //  console.log("Success");
          $location.path("/menu-content/conferences");

        } else {

        //  console.log("Error:");
        }

      })

    }

  })
