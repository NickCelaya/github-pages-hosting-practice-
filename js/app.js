angular.module("firstApp",["ui.router"]).config(function($stateProvider, $urlRouterProvider){

$stateProvider

.state("home", {
  url: "/",
  templateUrl: "views/homeTmpl.html",
  // controller: "homeCtrl"
})

.state("recipes", {
  url: "/recipes",
  templateUrl: "views/recipesTmpl.html",
  controller: "recipesCtrl"
})

.state("about", {
  url: "/about",
  templateUrl: "views/aboutTmpl.html",
  // controller: "aboutCtrl"
})


$urlRouterProvider
.otherwise("/");

});
