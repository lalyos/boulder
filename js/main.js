function BoulderCtrl($scope) {
  $scope.boulders = [
    {name:'kalacs', diff:'red',  climbed:false, tries:0},
    {name:'hokifli',diff:'green', climbed:false, tries:0},
    {name:'minyon',diff:'green', climbed:false, tries:0},
    {name:'isler',diff:'yellow', climbed:false, tries:0}
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
}
