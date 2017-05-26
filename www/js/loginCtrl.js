app.controller('loginCtrl', function($scope, $timeout,$ionicHistory,$http, $rootScope, $location,$ionicLoading,$state) {
// Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
    $rootScope.x="http://localhost:4003/";
    console.log("Login Check");
	$timeout(function() {

    }, 2000);

    $scope.user = {
      username: '',
      password: ''
    };
    $scope.signIn = function(form) {
      console.log("hi");
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
      $ionicLoading.hide();
      if (form.$valid) {

        if($scope.user.username == "vijayalakshmi.6506@gmail.com" && $scope.user.password == "vijaya") {
			 console.log($scope.user.username);
       $ionicLoading.hide();
		   $rootScope.name=$scope.user.username;
       $location.path('/menu-content/home');
         }
		else if ($scope.user.username == "haritammeneni@gmail.com" && $scope.user.password == "hari") {
       $ionicLoading.hide();
		   $rootScope.name=$scope.user.username;
 		   console.log( $rootScope.name);
       $location.path('/menu-content/home');
        }
		 else if ($scope.user.username == "ushakiranjaggumantri@gmail.com" && $scope.user.password == "usha") {
        $ionicLoading.hide();
		    $rootScope.name=$scope.user.username;
     		console.log( $rootScope.name);
        $location.path('/menu-content/home');
        }
		 else if ($scope.user.username == "rayuduchintalapudi07@gmail.com" && $scope.user.password == "rayudu") {
        $ionicLoading.hide();
		    $rootScope.name=$scope.user.username;
 		    console.log( $rootScope.name);
        $location.path('/menu-content/home');
        }
		 else if ($scope.user.username == "admin" && $scope.user.password == "admin") {
        $ionicLoading.hide();
		    $rootScope.name=$scope.user.username;
		    console.log( $rootScope.name);
        $location.path('/menu-content/home');
        }

        /*
        $http.get("https://ibmcloudant01.cloudant.com/employee/_all_docs?include_docs=true").then(function(response) {
    //console.log("hi");
          $rootScope.emp_list1 = response.data.rows;
          var emp=$rootScope.emp_list1;


          for(i=0;i< emp.length;i++){
            if($scope.user.username == emp[i].doc.email && $scope.user.password==emp[i].doc.password)
            {
              $rootScope.name=emp[i].doc.email;
              $rootScope.emp_image=emp[i].doc.image;
              $location.path('/side-menu21/home');

            }

          }

        })

        */

		else {
          $ionicLoading.hide();
          $scope.signInError = "Sorry wrong username/password";
		      $location.path('/login');
        }
      }
    }

})
