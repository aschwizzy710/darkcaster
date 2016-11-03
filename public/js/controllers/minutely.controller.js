(function() {
  angular.module('forecast-app')
        .controller('MinutelyController', MinutelyController);

MinutelyController.$inject = ['$scope', 'WeatherService'];

function MinutelyController($scope, WeatherService){
  $scope.minuteLat = WeatherService.lat;
  $scope.minuteLon = WeatherService.lon;
  $scope.weather = WeatherService.weatherData;
  $scope.minute = new Date();

  $scope.$watch(function(){
    return WeatherService.weatherData;
  }, function(newVal, oldVal){
    $scope.minuteLat = WeatherService.lat;
    $scope.minuteLon = WeatherService.lon;
    $scope.weather = WeatherService.weatherData;


  });
  function createLocation(latitude, longitude){
    WeatherService.createLocation(latitude, longitude);
  }
}
}());
