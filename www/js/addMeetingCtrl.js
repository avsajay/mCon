app.controller('addMeetingCtrl', function($scope, $location, $http, $rootScope) {

          $scope.listPref = $rootScope.emp_list1;
        //  console.log(JSON.stringify($scope.listPref));
          $scope.checkItems = [];

          $scope.print = function() {


        //    console.log($scope.checkItems);

            var assigned_array = [];
            for (i in $scope.checkItems) {

          //    console.log($scope.checkItems[i]);
              if ($scope.checkItems[i] == true) {
                assigned_array.push($scope.listPref[i - 1].doc.email);
              }
            }
            $rootScope.employees = assigned_array;

          }






    $scope.params = {};
    $scope.add = function(params) {
      //alert(JSON.stringify("hi" + $rootScope.employees));

  //    console.log(JSON.stringify(params));


      var _id = params.meeting_Title;
      var meeting_Title = params.meeting_Title;
      var meeting_Date = params.meeting_Date;

      var meeting_FromTime = params.meeting_FromTime;
      var meeting_ToTime = params.meeting_ToTime;

      var Agenda = params.Agenda;
      var meeting_Location = params.meeting_Location;


      var newmeetingDetails = {


        "_id": meeting_Title,
        "meeting_Title": meeting_Title,
        "meeting_Date": meeting_Date,
        "meeting_FromTime": meeting_FromTime,
        "meeting_ToTime": meeting_ToTime,
        "Agenda": Agenda,
        "meeting_Location": meeting_Location,
        "employees": $rootScope.employees,
        "conference_name": $rootScope.conference

      };
      $rootScope.meetingDetails = newmeetingDetails;

    //  console.log(JSON.stringify(newmeetingDetails));
      $http.post($rootScope.x+"meetings", newmeetingDetails).then(function(response) {
        if (response.data.error == undefined) {

    //      console.log("Success");
          $location.path("/menu-content/upcomingMeetings");

        } else {

        //  console.log("Error:");
        }

      })


    }
  })
