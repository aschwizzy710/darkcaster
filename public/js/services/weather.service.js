(function() {
  angular.module('forecast-app')
  .factory('WeatherService', WeatherService);

WeatherService.$inject = ['$http']; // allows us to use this tool in our service

function WeatherService($http){
    var secretToken = {
      secret: 'its a secret'
    };
    var latitude;
    var longitude;

    var weatherData = [];

  return {
    weatherData: weatherData,
    createLocation: createLocation
  };

  function createLocation(latitude, longitude){
    latitude = latitude;
    longitude = longitude;
    var config = {
      headers: secretToken
    };
    var url = '/forecast/' + latitude + ',' + longitude;
      return $http.get(url, config);
  }
}
})();
