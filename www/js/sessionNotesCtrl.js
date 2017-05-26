app.controller('sessionNotesCtrl', function($scope, $http, $rootScope, $location, $ionicPopup) {

    var title = $rootScope.session;
    //alert("Title="+title);
    $http.get($rootScope.x+"viewsessions?title=" + title).then(function(response) {

      $rootScope.sessionData= response.data;

      if($rootScope.sessionData.username==$rootScope.name){

       $rootScope.mine = true;

       }else{
       $rootScope.mine = false;

       }
     })

   })
