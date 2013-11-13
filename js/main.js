function BoulderCtrl($scope) {
    
    $scope.diffFilter = 'all'
    //$scope.usernameInput='xxx';
    $scope.loggedIn = false;
  $scope.boulders = [
    {id:1, name:'midnight', diff:'red',  climbed:false, tries:0},
    {id:2, name:'lighting', diff:'red',  climbed:false, tries:0},
    {id:3, name:'hókifli',diff:'green', climbed:false, tries:0},
    {id:4, name:'baklava',diff:'green', climbed:false, tries:0},
    {id:5, name:'zserbó',diff:'green', climbed:false, tries:0},
    {id:6, name:'piskóta',diff:'green', climbed:false, tries:0},
    {id:7, name:'beigli',diff:'green', climbed:false, tries:0},
    {id:8, name:'krémes',diff:'green', climbed:false, tries:0},
    {id:9, name:'Günter',diff:'green', climbed:false, tries:0},
    {id:10, name:'Linzer',diff:'green', climbed:false, tries:0},
    {id:11, name:'Ishler',diff:'green', climbed:false, tries:0},
    {id:12, name:'Csörlő',diff:'green', climbed:false, tries:0},
    {id:13, name:'Málna',diff:'yellow', climbed:false, tries:0},
    {id:14, name:'Dió',diff:'yellow', climbed:false, tries:0},
    {id:15, name:'Alma',diff:'yellow', climbed:false, tries:0},
    {id:16, name:'Pisztácia',diff:'yellow', climbed:false, tries:0},
    {id:17, name:'Mák',diff:'yellow', climbed:false, tries:0},
    {id:18, name:'Gesztenye',diff:'yellow', climbed:false, tries:0},
    {id:19, name:'Vanilia',diff:'yellow', climbed:false, tries:0},
    {id:20, name:'Csokoládé',diff:'yellow', climbed:false, tries:0},
    {id:21, name:'Laplace',diff:'yellow', climbed:false, tries:0},
    {id:22, name:'pucs',diff:'yellow', climbed:false, tries:0},
    {id:23, name:'csutka',diff:'yellow', climbed:false, tries:0},
    {id:24, name:'dó',diff:'blue', climbed:false, tries:0},
    {id:25, name:'ré',diff:'blue', climbed:false, tries:0},
    {id:26, name:'mi',diff:'blue', climbed:false, tries:0},
    {id:27, name:'fá',diff:'blue', climbed:false, tries:0},
    {id:28, name:'szó',diff:'blue', climbed:false, tries:0},
    {id:29, name:'ti',diff:'blue', climbed:false, tries:0},
    {id:30, name:'lá',diff:'blue', climbed:false, tries:0}
  ];
  
  $scope.climbed = function() {
    var count = 0;
    angular.forEach($scope.boulders, function(boulder) {
      count += boulder.climbed ? 1 : 0;
    });
    return count;
  };
  
  $scope.checkedClass = function(boulder) {
      var clazz = boulder.diff +  "_check glyphicon " ;
      if (boulder.climbed) {
          clazz = clazz + "glyphicon-check";
      } else {
          clazz = clazz + "glyphicon-unchecked";
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
  };

    $scope.filterByDifficulty = function(boulder) {
        if ($scope.diffFilter === 'all') {
            return true;
        } else {
            return boulder.diff === $scope.diffFilter;
        }
    };
  
  
}
