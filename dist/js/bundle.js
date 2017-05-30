"use strict";

angular.module("firstApp", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state("home", {
    url: "/",
    templateUrl: "views/homeTmpl.html"
  }).state("recipes", {
    url: "/recipes",
    templateUrl: "views/recipesTmpl.html",
    controller: "recipesCtrl"
  }).state("about", {
    url: "/about",
    templateUrl: "views/aboutTmpl.html"
  });

  $urlRouterProvider.otherwise("/");
});
"use strict";

angular.module("firstApp").controller("homeCtrl", function ($scope, homeService) {
  //
  // $scope.data;
  //
  // $scope.getInfo = function(){
  //   var promise = homeService.getData();
  //   promise.then(function(response){
  //     $scope.data = response
  //   })
  //
  // };
  //
  //
  // $scope.getInfo();


  // end of controller
});
"use strict";

angular.module("firstApp").controller("mainCtrl", function ($scope, mainService) {

  $scope.test = "the controller is working";
  $scope.test1 = mainService.test;
});
"use strict";

angular.module("firstApp").controller("recipesCtrl", function ($scope, homeService) {

  $scope.data;

  $scope.getInfo = function () {
    var promise = homeService.getData();
    promise.then(function (response) {
      $scope.data = response;
    });
  };

  // $scope.getInfo();
  $scope.clearData = function () {
    $scope.data = "";
  };

  // end of controller
});
"use strict";

angular.module("firstApp").directive("hoverDirective", function () {

  return {
    restrict: "A",
    link: function link(scope, element, attributes) {

      element.on("mouseover", function () {
        element.css("color", "#E3D4A6");
      });

      element.on("mouseleave", function () {
        element.css("color", "white");
      });
    }
  };

  // end of directive
});
"use strict";

angular.module("firstApp").service("aboutService", function ($http) {});
// angular.module("firstApp").service("homeService", function($http){
//
// var baseUrl = "http://www.recipepuppy.com/api/"
// // http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3
//   //copy & paste    -   -  >     //^ingredients    ^style ^ page params to change for different data
//
//     this.getData = function(){
//       var promise = $http({
//         method: "GET",
//         url: baseUrl + "?i=onions,garlic&q=pizza&p=1"
//       })
//         return promise.then(function(response){
//           console.log('dog', response);
//           return response.data.results
//       })
//
//     }
// // end of service.
// });
//
//


//
// this.getAllData(function(){
//   return $http({
//     method: 'GET',
//     url: baseUrl
//   }).then(function(response){
//     console.log(response.data)
//   })
// })
// }
"use strict";
"use strict";

angular.module("firstApp").service("mainService", function () {

  this.test = "service is working";
});
"use strict";

angular.module("firstApp").service("homeService", function ($http) {

  var baseUrl = "http://www.recipepuppy.com/api/";
  // http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3
  //copy & paste    -   -  >     //^ingredients    ^style ^ page params to change for different data

  this.getData = function () {
    var promise = $http({
      method: "GET",
      url: baseUrl + "?i=steak,&q=salad&p=1"
    });
    return promise.then(function (response) {
      console.log('dog', response);
      return response.data.results;
    });
  };
  // end of service.
});
//# sourceMappingURL=bundle.js.map
