app.controller('addSessionNotesCtrl', function($scope, $location, $http, $rootScope, $ionicPopup) {

    $scope.params = {};

    $scope.add = function(params) {
  //    console.log(JSON.stringify(params));


      var _id = params.session_Title;
      var session_Title = params.session_Title;
      var session_Location = params.session_Location;
      var session_Speaker = params.session_Speaker;
      var session_SpeakerDesignation=params.session_SpeakerDesignation;


      var newsessionDetails = {

        "_id": session_Title,
        "session_Title": session_Title,
        "session_Location": session_Location,
        "session_Speaker": session_Speaker,
        "session_SpeakerDesignation":session_SpeakerDesignation,
        "conference_name": $rootScope.conference,
		     "username":$rootScope.name

      };
      $rootScope.sessionDetails = newsessionDetails;

      $location.path("/menu-content/addSessionNotes1");
    }
  })
