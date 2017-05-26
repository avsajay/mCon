app.controller('upcomingMeetingsCtrl', function($scope, $http, $rootScope, $location, $ionicPopup) {
    var title = $rootScope.conference;
  $scope.completed_Meetings_List={};
$scope.upcoming_Meetings_List={};
$scope.diffDays1={};
$scope.diffDays2={};

    var d = new Date();

    var year = d.getUTCFullYear();
    var month =("0" + d.getDate()).slice(-2)
    var date = d.getUTCDate();
    var hour = d.getUTCHours();
    var min = d.getUTCMinutes();
    var sec = d.getUTCSeconds();
    var newDate = year + "-" + month + "-" + date + "T" + hour + ":" + min + ":" + sec+".000Z";

    $http.get($rootScope.x+"upcomingmeet?conferenceName=" + title).then(function(response) {
      //alert(JSON.stringify(response.data.rows));
//console.log("URL:"+$rootScope.x+"upcomingmeet?conferenceName=" + title + "&meeting_Date=" + newDate)
      //console.log(JSON.stringify(response));

    //$scope.meetings_list = response.data;
	 console.log('meeting List'+JSON.stringify(response.data));
    for(var i=0, j=0, k=0;i<response.data.length;i++){
       var currentDate = new Date();
    var mDate =  Date.parse(response.data[i].meeting_Date, "yyyy-MM-dd HH:mm:ss");
            var timeDiff = currentDate.getTime() - mDate;
        var diffDays = (timeDiff / (1000 * 3600 * 24));
            if(diffDays>0){
           $scope.completed_Meetings_List[j] = response.data[i];
           $scope.diffDays1[j]=Math.floor(diffDays);
           j++;

            }
            else{

            $scope.upcoming_Meetings_List[k] = response.data[i];
            $scope.diffDays2[k]=Math.ceil(Math.abs(diffDays));
            k++;
            }


    }

    console.log('difference days1=:'+JSON.stringify($scope.diffDays1));
    console.log('completed_Meetings_List'+JSON.stringify($scope.completed_Meetings_List));

    console.log('difference days2=:'+JSON.stringify($scope.diffDays2));
    console.log('upcoming_Meetings_List'+JSON.stringify($scope.upcoming_Meetings_List));

      $scope.call = function(item) {
        $rootScope.meeting1 = item.meeting_Title;
        //console.log(JSON.stringify(item));
        //console.log(JSON.stringify($rootScope.meeting1));
        $location.path("/menu-content/meetingDetails");
      }
    })
  })
