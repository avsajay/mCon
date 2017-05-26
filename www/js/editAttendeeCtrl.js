app.controller('editAttendeeCtrl', function($scope, $http, $location, $rootScope) {

  //  console.log("root data" + JSON.stringify($rootScope.profileData.attendee_type));
    $scope.items = [{
      "name": "Customer"
    }, {
      "name": "Partner"
    }, {
      "name": "other"
    }];
    $scope.items[$rootScope.profileData.attendee_type].checked = true;
  //  console.log(JSON.stringify($scope.items));
    $scope.edit = function(profileData) {
		 var filesSelected = document.getElementById("inputFileToLoad").files;
      if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
          var base64value = fileLoadedEvent.target.result;

          $rootScope.card1= base64value;
          //console.log($rootScope.card);

        };
        fileReader.readAsDataURL(fileToLoad);
      }

      var _id = profileData.attendee_Email;
      var attendee_Name = profileData.attendee_Name;
      var attendee_Email = profileData.attendee_Email;
      var attendee_PhoneNumber = profileData.attendee_PhoneNumber;
      var attendee_Designation = profileData.attendee_Designation;
      var attendee_Company = profileData.attendee_Company;
      var attendee_type = profileData.attendee_type;
      var comments = profileData.comments;
      var modifiedattendeeDetails = {

        "_id": attendee_Email,
        "attendee_Name": attendee_Name,
        "attendee_Email": attendee_Email,
        "attendee_PhoneNumber": attendee_PhoneNumber,
        "attendee_Designation": attendee_Designation,
        "attendee_Company": attendee_Company,
        "attendee_type": attendee_type,
        "comments": comments,
        "conference_name": $rootScope.conference,
        "image": $rootScope.card1
      };
    //  console.log(JSON.stringify(modifiedattendeeDetails));
      $http.post($rootScope.x+"attendeeupd", modifiedattendeeDetails).then(function(response) {
        if (response.data.error == undefined) {

        //  console.log("Success");
        //  console.log(JSON.stringify(response));
          $location.path("/menu-content/attendees");
        //  console.log("hi" + JSON.stringify(modifiedattendeeDetails.attendee_type));
        } else {

      //    console.log("Error:");
        }

      })


    }

  })
