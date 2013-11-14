function BoulderCtrl($scope) {
    
    $scope.diffFilter = 'all'
    //$scope.usernameInput='xxx';
    $scope.loggedIn = false;
  $scope.boulders = [
    {id:1, name:'a', diff:'red',  climbed:false, tries:0},
    {id:2, name:'b', diff:'red',  climbed:false, tries:0},
    {id:3, name:'c',diff:'green', climbed:false, tries:0},
    {id:4, name:'d',diff:'green', climbed:false, tries:0},
    {id:5, name:'e',diff:'green', climbed:false, tries:0},
    {id:6, name:'f',diff:'green', climbed:false, tries:0},
    {id:7, name:'g',diff:'green', climbed:false, tries:0},
    {id:8, name:'h',diff:'green', climbed:false, tries:0},
    {id:9, name:'i',diff:'green', climbed:false, tries:0},
    {id:10, name:'j',diff:'green', climbed:false, tries:0},
    {id:11, name:'k',diff:'green', climbed:false, tries:0},
    {id:12, name:'l',diff:'green', climbed:false, tries:0},
    {id:13, name:'m',diff:'yellow', climbed:false, tries:0},
    {id:14, name:'n',diff:'yellow', climbed:false, tries:0},
    {id:15, name:'o',diff:'yellow', climbed:false, tries:0},
    {id:16, name:'p',diff:'yellow', climbed:false, tries:0},
    {id:17, name:'q',diff:'yellow', climbed:false, tries:0},
    {id:18, name:'r',diff:'yellow', climbed:false, tries:0},
    {id:19, name:'s',diff:'yellow', climbed:false, tries:0},
    {id:20, name:'t',diff:'yellow', climbed:false, tries:0}
  ];
  
  $scope.climbed = function() {
    var count = 0;
    angular.forEach($scope.boulders, function(boulder) {
      count += boulder.climbed ? 1 : 0;
    });
    return count;
  };

  $scope.climbedOnly = function(diff) {
    var count = 0;
    angular.forEach($scope.boulders, function(boulder) {
      count += boulder.climbed && diff === boulder.diff ? 1 : 0;
    });
    return count;
  };

    $scope.climbedTries = function() {
    var count = 0;
    angular.forEach($scope.boulders, function(boulder) {
        if (boulder.climbed) 
          count += boulder.tries;
    });
    return count;
  };
  
  $scope.checkedClass = function(boulder) {
      var clazz = "glyphicon glyphicon-unchecked";
      if (boulder.climbed) {
          clazz = "green_check glyphicon glyphicon-check";
      } else {
          if (boulder.tries > 5) {
              clazz = clazz + " red_check";
          } else {
                if (boulder.tries > 0) {
                    clazz = clazz + " yellow_check";
                }

          }
      }
      return clazz;
  };
  
  $scope.selectBoulder = function(id) {
      $scope.selected = id;
  };
  
  $scope.login = function() {
    if ($scope.usernameInput.length >= 3) {
        $scope.username = $scope.usernameInput;
        $scope.loggedIn = true;
    }
  };

  $scope.increaseTries = function(boulder) {
      boulder.tries = boulder.tries + 1;
  };

  $scope.decreaseTries = function(boulder) {
      var limit = 0;
      if (boulder.climbed) {
        limit = 1;
      }
      boulder.tries = boulder.tries - 1;
      if ( boulder.tries < limit) {
          boulder.tries = limit;
      }
  };

  $scope.toggleClimbed = function(boulder) {
      boulder.climbed = !boulder.climbed;
      if (boulder.climbed && boulder.tries === 0) {
          boulder.tries = 1;
      }
      
      if (boulder.climbed) {
          $scope.diffFilter = 'all';
      } 
  };

    $scope.filterByDifficulty = function(boulder) {
        if ($scope.diffFilter === 'all') {
            return true;
        } else {
            if ($scope.diffFilter === 'unclimbed') {
                return ! boulder.climbed;
            }
            return boulder.diff === $scope.diffFilter;
        }
    };

  $scope.toggleFilterUnclimbed = function() {
    if ($scope.diffFilter === 'all') {
        $scope.diffFilter = 'unclimbed';
    } else {
        $scope.diffFilter = 'all';
    }
  };
  
}
