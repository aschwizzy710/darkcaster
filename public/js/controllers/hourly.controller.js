(function() {
  angular.module('forecast-app')
        .controller('HourlyController', HourlyController);

HourlyController.$inject = ['$scope', 'WeatherService'];

function HourlyController($scope, WeatherService){
  $scope.createLocation = createLocation;
  $scope.weather = WeatherService.weatherData;

  $scope.$watch(function(){
    return WeatherService.weatherData;
  }, function(newVal, oldVal){
    $scope.weather = WeatherService.weatherData;
  });
  function createLocation (latitude, longitude){
    WeatherService.createLocation(latitude, longitude);
  }
}

}());
