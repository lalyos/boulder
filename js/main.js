function BoulderCtrl($scope) {
    
    $scope.loggedIn = false;
  $scope.boulders = [
    {id:1, name:'kalacs', diff:'red',  climbed:false, tries:0},
    {id:2, name:'hokifli',diff:'green', climbed:false, tries:0},
    {id:3, name:'minyon',diff:'green', climbed:false, tries:0},
    {id:4, name:'isler',diff:'yellow', climbed:false, tries:0}
  ];
  
  $scope.climbed = function() {
    var count = 0;
    angular.forEach($scope.boulders, function(boulder) {
      count += boulder.climbed ? 1 : 0;
    });
    return count;
  };
  
  $scope.checkedClass = function(climbed) {
      var clazz = "glyphicon glyphicon-unchecked";
      if (climbed) clazz = "glyphicon glyphicon-check";
       
      return clazz;
  };
  
  $scope.selectBoulder = function(id) {
      $scope.selected = id;
  };
  
  $scope.login = function() {
      $scope.username = $scope.usernameInput;
      $scope.loggedIn = true;
  };

  $scope.increaseTries = function(boulder) {
      boulder.tries = boulder.tries + 1;
  };

  $scope.decreaseTries = function(boulder) {
      boulder.tries = boulder.tries - 1;
  };

}
