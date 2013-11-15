function BoulderCtrl($scope, $http) {
    $scope.debugEnabled = false;
    $scope.diffFilter = 'all'
    //$scope.usernameInput='xxx';
    $scope.loggedIn = false;
    //$scope.highscore = [{"id":2,"name":"geza","top":15,"tries":20,"version":2},{"id":3,"name":"dudi","top":4,"tries":8,"version":3}];
    
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
      $scope.sendClimbs();

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
  
    $scope.sendClimbs = function() {
//        var tries = 0;
//        var tops = 0;
//        angular.forEach($scope.boulders, function(boulder) {
//            if (boulder.climbed) {
//            		tries += boulder.tries;
//            		tops += 1;
//            }
//        });
//        $http.get('/climbers/update/' 
//        		+ $scope.username + '/' + tops + '/' + tries).success(function(data) {
//            $scope.restResponse = data;
//        });
    };
  
    $scope.refreshHighscore = function() {
//        $http.get('/climbers').success(function(data) {
//            $scope.highscore = data;
//        });
    		$scope.highscore = [{"id":6,"name":"drusza","top":20,"tries":22,"version":19},{"id":7,"name":"simon bence","top":20,"tries":20,"version":19},{"id":8,"name":"bubu","top":9,"tries":13,"version":0},{"id":10,"name":"travis","top":20,"tries":34,"version":1},{"id":11,"name":"lovi","top":18,"tries":34,"version":0},{"id":12,"name":"ben","top":7,"tries":7,"version":0},{"id":13,"name":"hum zsolt","top":13,"tries":21,"version":0},{"id":14,"name":"markó vivien","top":8,"tries":9,"version":0},{"id":15,"name":"muki","top":10,"tries":13,"version":0},{"id":16,"name":"kucsera bálint","top":19,"tries":25,"version":0},{"id":17,"name":"Balogh Claudia","top":7,"tries":8,"version":0},{"id":18,"name":"Krivarics Dóri","top":9,"tries":19,"version":0},{"id":19,"name":"Payer Kornél","top":20,"tries":26,"version":0},{"id":20,"name":"Bobi","top":18,"tries":22,"version":0},{"id":22,"name":"szisz","top":12,"tries":15,"version":0},{"id":23,"name":"benke balázs","top":20,"tries":42,"version":0},{"id":24,"name":"csohány csabi","top":18,"tries":28,"version":0},{"id":25,"name":"Farkas Tomi","top":20,"tries":21,"version":0},{"id":26,"name":"Madarász Dávid","top":20,"tries":33,"version":0},{"id":27,"name":"Tóta Ádám","top":18,"tries":40,"version":0},{"id":28,"name":"Háber Balázs","top":19,"tries":29,"version":0},{"id":29,"name":"Holló Gergő","top":14,"tries":30,"version":0},{"id":30,"name":"Kerényi Barna","top":20,"tries":20,"version":0},{"id":31,"name":"Drimba János","top":13,"tries":16,"version":0},{"id":33,"name":"Borbély Gábor","top":18,"tries":20,"version":0},{"id":34,"name":"Scharnitzky Ádám","top":19,"tries":19,"version":0},{"id":35,"name":"laller","top":14,"tries":25,"version":10}];
    };
    
    $scope.scoreOrder = function(climber) {
    		return (climber.top + 1) + (1 / climber.tries);
    };
    
    $scope.refreshHighscore();
}
