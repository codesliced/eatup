angular.module('Eatup')
  .controller('GroupsCtrl', function ($scope) {
    $scope.groups = [{
      groupName: 'SFHTML5',
      eventName: 'Talk like a pirate',
      groupType: 'Technology',
      groupCreated: '2011',
      memberCount: '400'
    }, {
      groupName: 'WWC Algorithms',
      eventName: 'Interview prep',
      groupType: 'Technology',
      groupCreated: '2013',
      memberCount: '220'
    }, {
      groupName: 'SF Meteor',
      eventName: 'All Javascript',
      groupType: 'Technology',
      groupCreated: '2012',
      memberCount: '700'
    }];

  });