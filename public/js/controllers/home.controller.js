(function() {
  angular.module('forecast-app') // setter syntax --> starts the application
  .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', 'WeatherService',]; // what tools the Home Controller needs to do service

function HomeController($scope, WeatherService){ // $scope is our bridge to the DOM
  // $scope.locations = LocationService.get();
  $scope.createLocation = createLocation;
  $scope.weather = WeatherService.weatherData;
  // $scope.log = log;


  $scope.$watch(function(){
    return WeatherService.weatherData;
  }, function(newVal, oldVal){
    $scope.weather = WeatherService.weatherData;
  });
  function createLocation(latitude, longitude){
      WeatherService.createLocation(latitude, longitude);
  }
  // function log(){
  //   console.log(WeatherService.weatherData);
  // }
  }
  // function deleteLocation(index){
  //   LocationService.delete(index);
  // }
  // function editLocation(location){
  //   location.isBeingEdited = true;
  // }
  // function saveLocation(index, location){
  //   LocationService.update(index, location.desc);
  //   location.isBeingEdited = false;
  // }


})();
