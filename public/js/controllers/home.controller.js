(function() {
  angular.module('forecast-app') // setter syntax --> starts the application
  .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', 'WeatherService']; // what tools the Home Controller needs to do service

function HomeController($scope, WeatherService){ // $scope is our bridge to the DOM
  // $scope.locations = LocationService.get();
  $scope.createLocation = createLocation;

  function createLocation(latitude, longitude){
    WeatherService.createLocation(latitude, longitude)
    .then(function(response){
      $scope.weather = response.data;
      debugger;
    });
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
}
}());
