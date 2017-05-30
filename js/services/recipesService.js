angular.module("firstApp").service("homeService", function($http){

var baseUrl = "http://www.recipepuppy.com/api/"
// http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3
  //copy & paste    -   -  >     //^ingredients    ^style ^ page params to change for different data

    this.getData = function(){
      var promise = $http({
        method: "GET",
        url: baseUrl  + "?i=steak,&q=salad&p=1"
      })
        return promise.then(function(response){
          console.log('dog', response);
          return response.data.results
      })

    }
// end of service.
});
