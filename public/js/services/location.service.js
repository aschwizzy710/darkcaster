// (function() {
//   angular.module('intro')
//   .factory('LocationService', LocationService);
//
// LocationService.$inject = ['']; // allows us to use this tool in our service
//
// function LocationService(){
//   var data = [
//       { desc: 'take a nap'}, // each one of these is a todo object instead of a todo string
//       { desc: 'take another nap'},
//       { desc: 'get some milk'},
//       { desc: 'win the lotto'}
//     ];
//
//   return {
//
//     get: get,
//     create: create,
//     update: update,
//     delete: remove
//   };
//   function get(){
//     return data;
//   }
//   function create(description){
//     data.push({ desc: description });
//     // $window.localStorage.setItem('data', JSON.stringify(data));
//   }
//   function update(index, newDescription){
//     data.splice(index, 1, { desc: newDescription });
//     // $window.localStorage.setItem('data', JSON.stringify(data));
//   }
//   function remove(index){
//     data.splice(index, 1);
//     // $window.localStorage.setItem('data', JSON.stringify(data));
//   }
// }
//
// }());
