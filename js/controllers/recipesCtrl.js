
angular.module("firstApp").controller("recipesCtrl", function($scope, homeService) {

$scope.data;

$scope.getInfo = function(){
  var promise = homeService.getData();
  promise.then(function(response){
    $scope.data = response
  })


};


// $scope.getInfo();
$scope.clearData = function(){
  $scope.data = "";
}


// end of controller
});
