angular.module("firstApp").controller("mainCtrl", function($scope, mainService){

$scope.test = "the controller is working";
$scope.test1 = mainService.test;


});
