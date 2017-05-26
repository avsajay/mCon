// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngMaterial', 'ngMessages', 'ngCordova'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
app.config(function($stateProvider, $urlRouterProvider, $mdGestureProvider){
$mdGestureProvider.skipClickHijack();
$stateProvider

  .state('loginPage', {
      url: '/loginPage',
      templateUrl: 'templates/loginPage.html',
      controller: 'loginCtrl',
      'fabContent': {
              template: ''
          }
    })
.state('menu', {
  url: '/menu-content',
  abstract: true,
  templateUrl: 'templates/menu.html',

})
.state('menu.home', {
    url: '/home',
    views: {
      'menu-content': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })
  .state('menu.eventPolicy', {
      url: '/eventPolicy',
      views: {
        'menu-content': {
          templateUrl: 'templates/eventPolicy.html',

        }
      }
    })
    .state('menu.expensePolicy', {
        url: '/expensePolicy',
        views: {
          'menu-content': {
            templateUrl: 'templates/expensePolicy.html',

          }
        }
      })
      .state('menu.contactUs', {
          url: '/contactUs',
          views: {
            'menu-content': {
              templateUrl: 'templates/contactUs.html',

            }
          }
        })
        .state('menu.conferenceDashboard', {
            url: '/conferenceDashboard',
            views: {
              'menu-content': {
                templateUrl: 'templates/conferenceDashboard.html',
                controller: 'conferenceDashboardCtrl'
              }
            }
          })




      .state('menu.meetingNotes', {
        url: '/meetingNotes',
        views: {
          'menu-content': {
            templateUrl: 'templates/meetingNotes.html',
            controller: 'meetingNotesCtrl'
          }
        }
      })
          .state('menu.logistics', {
              url: '/logistics',
              views: {
                'menu-content': {
                  templateUrl: 'templates/logistics.html',
                  controller: 'adminDashboardCtrl'
                }
              }
            })
            .state('menu.attendeeList', {
                url: '/attendeeList',
                views: {
                  'menu-content': {
                    templateUrl: 'templates/attendeeList.html',
                    controller: 'attendeeListCtrl'
                  }
                }
              })
              .state('menu.mySessions', {
                  url: '/mySessions',
                  views: {
                    'menu-content': {
                      templateUrl: 'templates/mySessions.html',
                      controller: 'mySessionsCtrl'
                    }
                  }
                })
                .state('menu.teamSessions', {
                    url: '/teamSessions',
                    views: {
                      'menu-content': {
                        templateUrl: 'templates/teamSessions.html',
                        controller: 'teamSessionsCtrl'
                      }
                    }
                  })
                  .state('menu.upcomingMeetings', {
                      url: '/upcomingMeetings',
                      views: {
                        'menu-content': {
                          templateUrl: 'templates/upcomingMeetings.html',
                          controller: 'upcomingMeetingsCtrl'
                        }
                      }
                    })
                    .state('menu.editMeeting', {
      url: '/editMeeting',
      views: {
        'menu-content': {
          templateUrl: 'templates/editMeeting.html',
          controller: 'editMeetingCtrl'
        }
      }
    })
    .state('menu.addSessionNotes', {
  url: '/addSession',
  views: {
    'menu-content': {
      templateUrl: 'templates/addSessionNotes.html',
      controller: 'addSessionNotesCtrl'
    }
  }
})
.state('menu.editSessionNotes', {
  url: '/editSessionNotes',
  views: {
    'menu-content': {
      templateUrl: 'templates/editSessionNotes.html',
      controller: 'editSessionNotesCtrl'
    }
  }
})
.state('menu.editSessionNotes1', {
  url: '/editSessionNotes1',
  views: {
    'menu-content': {
      templateUrl: 'templates/editSessionNotes1.html',
controller:'editSessionNotes1Ctrl'
    }
  }
})

.state('menu.addSessionNotes1', {
  url: '/addSessionNotes1',
  views: {
    'menu-content': {
      templateUrl: 'templates/addSessionNotes1.html',
controller:'addSessionNotes1Ctrl'
    }
  }
})
.state('menu.sessionNoteses', {
  url: '/sessionNoteses',
  views: {
    'menu-content': {
      templateUrl: 'templates/sessionNoteses.html',
      controller: 'sessionNotesesCtrl'
    }
  }
})
 .state('menu.sessionNotes', {
        url: '/sessionNotes',
        views: {
          'menu-content': {
            templateUrl: 'templates/sessionNotes.html',
            controller: 'sessionNotesCtrl'
          }
        }
      })
    .state('menu.attendeeInformation2', {
            url: '/attendeeInfo',
            views: {
              'menu-content': {
                templateUrl: 'templates/attendeeInformation2.html',
                controller: 'attendeeInformation2Ctrl'
              }
            }
          })
          .state('menu.attendeeInformation', {
  url: '/attendeeForm',
  views: {
    'menu-content': {
      templateUrl: 'templates/attendeeInformation.html',
      controller: 'attendeeInformationCtrl'
    }
  }
})
.state('menu.editAttendee', {
    url: '/editAttendee',
    views: {
      'menu-content': {
        templateUrl: 'templates/editAttendee.html',
        controller: 'editAttendeeCtrl'
      }
    }
  })
    .state('menu.meetingDetails', {
      url: '/meetingDetails',
      views: {
        'menu-content': {
          templateUrl: 'templates/meetingDetails.html',
          controller: 'meetingDetailsCtrl'
        }
      }
    })
                  .state('menu.completedMeetings', {
                      url: '/completedMeetings',
                      views: {
                        'menu-content': {
                          templateUrl: 'templates/completedMeetings.html',
                          controller: 'upcomingMeetingsCtrl'
                        }
                      }
                    })
                     .state('menu.chatRoom', {
        url: '/chatroom',
        views: {
          'menu-content': {
            templateUrl: 'templates/chatRoom.html',
            controller: 'chatRoomCtrl'
          }
        }
      })
                      .state('menu.ourTeam', {
                        url: '/ourteam',
                        views: {
                          'menu-content': {
                            templateUrl: 'templates/ourTeam.html',
                            controller: 'conferenceDashboardCtrl'
                          }
                        }
                      })
                      .state('menu.profile', {
      url: '/profile',
      views: {
        'menu-content': {
          templateUrl: 'templates/profile.html',
          controller: 'conferenceDashboardCtrl'
        }
      }
    })

                      .state('menu.addAttendee', {
                        url: '/addAttendee',
                        views: {
                          'menu-content': {
                            templateUrl: 'templates/addAttendee.html',
                            controller: 'addAttendeeCtrl'
                          }
                        }
                      })
                      .state('menu.conferences', {
                          url: '/conferences',
                          views: {
                            'menu-content': {
                              templateUrl: 'templates/conferences.html',
                  			 controller: 'conferencesCtrl'
                            }
                          }
                        })
                      .state('menu.addConference', {
    url: '/addConference',
    views: {
      'menu-content': {
        templateUrl: 'templates/addConference.html',
   controller: 'addConferenceCtrl'
      }
    }
  })
  .state('menu.add_conf_', {
    url: '/add_conf_logistics',
    views: {
      'menu-content': {
        templateUrl: 'templates/add_conf_logistics.html',
   controller: 'add_conf_logisticsCtrl'
      }
    }
  })
.state('menu.add_conf_emp', {
    url: '/add_conf_emp',
    views: {
      'menu-content': {
        templateUrl: 'templates/add_conf_emp.html',
   controller: 'add_conf_empCtrl'
      }
    }
  })
.state('menu.editConference', {
    url: '/editConference',
    views: {
      'menu-content': {
        templateUrl: 'templates/editConference.html',
   controller: 'editConferenceCtrl'
      }
    }
  })

.state('menu.edit_conf_emp', {
    url: '/edit_conf_emp',
    views: {
      'menu-content': {
        templateUrl: 'templates/edit_conf_emp.html',
   controller: 'edit_conf_empCtrl'
      }
    }
  })
.state('menu.viewConference', {
    url: '/viewConference',
    views: {
      'menu-content': {
        templateUrl: 'templates/viewConference.html',
   controller: 'adminDashboardCtrl'
      }
    }
  })
.state('menu.view_employees', {
    url: '/view_employees',
    views: {
      'menu-content': {
        templateUrl: 'templates/view_employees.html',
   controller: 'adminDashboardCtrl'
      }
    }
  })

.state('menu.editlogistics', {
    url: '/editlogistics',
    views: {
      'menu-content': {
        templateUrl: 'templates/editlogistics.html',
        controller: 'editlogisticsCtrl'
      }
    }
  })

	   .state('menu.addMeetingNotes', {
        url: '/addMeetingNotes',
        views: {
          'menu-content': {
            templateUrl: 'templates/addMeetingNotes.html',
            controller: 'addMeetingNotesCtrl'
          }
        }
      })
      .state('menu.addMeeting', {
  url: '/addMeeting',
  views: {
    'menu-content': {
      templateUrl: 'templates/addMeeting.html',
      controller: 'addMeetingCtrl'
    }
  }
})
	    .state('menu.editMeetingNotes', {
        url: '/editMeetingNotes',
        views: {
          'menu-content': {
            templateUrl: 'templates/editMeetingNotes.html',
			 controller: 'editMeetingNotesCtrl'
          }
        }
      })
	  .state('menu.editemployee', {
        url: '/editemployee',
        views: {
          'menu-content': {
            templateUrl: 'templates/editemployee.html',
			 controller: 'editemployeeCtrl'
          }
        }
      })
.state('menu.session_notes_details', {
    url: '/session_notes_details',
    views: {
      'menu-content': {
        templateUrl: 'templates/session_notes_details.html'
      }
    }
  })
.state('menu.meeting_notes_details', {
    url: '/meeting_notes_details',
    views: {
      'menu-content': {
        templateUrl: 'templates/meeting_notes_details.html'
      }
    }
  })
$urlRouterProvider.otherwise('/loginPage');
})
