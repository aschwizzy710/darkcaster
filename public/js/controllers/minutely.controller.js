(function() {
  angular.module('forecast-app')
        .controller('MinutelyController', MinutelyController);

MinutelyController.$inject = ['$scope', 'WeatherService'];

function MinutelyController($scope, WeatherService){
  $scope.createLocation = createLocation;
  $scope.weather = WeatherService.weatherData;

  $scope.$watch(function(){
    return WeatherService.weatherData;
  }, function(newVal, oldVal){
    $scope.weather = WeatherService.weatherData;
  });
  function createLocation(latitude, longitude){
    WeatherService.createLocation(latitude, longitude);
  }
}
}());
