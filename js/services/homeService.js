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
