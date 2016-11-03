(function() {
  angular.module('forecast-app') // setter syntax --> starts the application
  .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', 'WeatherService',]; // what tools the Home Controller needs to do service

function HomeController($scope, WeatherService){ // $scope is our bridge to the DOM
  $scope.homeLat = WeatherService.lat;
  $scope.homeLon = WeatherService.lon;
  $scope.weather = WeatherService.weatherData;
  $scope.createLocation = createLocation;
  // $scope.log = log;


  $scope.$watch(function(){
    return WeatherService.weatherData;
  }, function(newVal, oldVal){
    $scope.homeLat = WeatherService.lat;
    $scope.homeLon = WeatherService.lon;
    $scope.weather = WeatherService.weatherData;
  });

  function createLocation(latitude, longitude){
    
      WeatherService.createLocation(latitude, longitude);
  }

  }

})();
