app.controller('chatRoomCtrl', function($scope, $http, $rootScope, $location, $ionicPopup) {

	localStorage.setItem('username', $rootScope.name);
	//localStorage.setItem('username', 'sasank');
    $scope.records = [];
    var conference=$rootScope.conference;
	//alert(conference)

	$http.get($rootScope.x+"viewchat?hari="+conference).then(function(response) {
      $scope.records = response.data[0].messages;
      console.log(JSON.stringify($scope.records));
      for (i = 0; i < $scope.records.length; i++) {
        if ($scope.records[i].username == localStorage.getItem('username'))
          $scope.records[i].type = 'self';
        else
          $scope.records[i].type = 'other';
      }
    })

    $scope.username = localStorage.getItem('username');
    $scope.currentDate=new Date();
    $scope.sendMessage = function(params) {
      var msg = {
        "_id": $rootScope.conference,
        "messages": [{
          "username": $scope.username,
          "date":$scope.currentDate,
          "image":$rootScope.emp_image,
          "message": params.message
        }]
      }
      $scope.params.message = "";
      //console.log(msg)
      $http.post($rootScope.x+"updchat", msg).then(function(response) {
        $http.get($rootScope.x+"viewchat?hari=" +conference).then(function(response) {
          $scope.records = response.data[0].messages;
          //console.log(JSON.stringify($scope.records));
          for (i = 0; i < $scope.records.length; i++) {
            if ($scope.records[i].username == localStorage.getItem('username'))
              $scope.records[i].type = 'self';
            else
              $scope.records[i].type = 'other';
          }
        })
      })

    }

  })
