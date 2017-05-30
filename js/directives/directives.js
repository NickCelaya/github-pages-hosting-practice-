angular.module("firstApp").directive("hoverDirective", function(){

    return{
      restrict: "A",
      link: function(scope, element, attributes){

        element.on("mouseover", function(){
            element.css("color", "#E3D4A6" )
        })

        element.on("mouseleave", function(){
              element.css("color", "white");
        })
      }
    }

// end of directive
});
