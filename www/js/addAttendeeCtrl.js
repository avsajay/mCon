app.controller('addAttendeeCtrl', function($scope, $http, $location, $rootScope, $ionicPopup) {

    //alert($rootScope.conference);

    $scope.items = [{
      "name": "Customer"
    }, {
      "name": "Partner"
    }, {
      "name": "other"
    }];

    $scope.demo = function(params) {
    //  console.log("Demo function Called!!!");

      var filesSelected = document.getElementById("inputFileToLoad").files;

      if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
          var base64value = fileLoadedEvent.target.result;

          $rootScope.card = base64value;
          //console.log($rootScope.card);

        };
        fileReader.readAsDataURL(fileToLoad);
      }



      var _id = params.attendee_Email;
      var attendee_Name = params.attendee_Name;
      var attendee_Email = params.attendee_Email;
      var attendee_PhoneNumber = params.attendee_PhoneNumber;
      var attendee_Designation = params.attendee_Designation;
      var attendee_Company = params.attendee_Company;

      var attendee_type = params.selectedItem;
      var comments = params.comments;



      var newattendeeDetails = {

		 "_id": attendee_Email,
        "attendee_Name": attendee_Name,

        "attendee_Email": attendee_Email,
        "attendee_PhoneNumber": attendee_PhoneNumber,
        "attendee_Designation": attendee_Designation,
        "attendee_Company": attendee_Company,
        "attendee_type": attendee_type,
        "comments": comments,
        "conference_name": $rootScope.conference,
        "image": $rootScope.card
      };


      $http.post($rootScope.x+"attendee", newattendeeDetails).then(function(response) {

        //console.log(JSON.stringify(response));
        if (response.data.result) {

          //console.log("Success");

          $location.path("/menu-content/attendees");
        //  console.log(JSON.stringify(response));
        } else if (response.data.error) {

          console.log("Error msg:");
        }
      })
    }
  })
