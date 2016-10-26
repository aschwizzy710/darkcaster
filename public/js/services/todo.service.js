(function() {
  angular.module('intro')
  .factory('TodoService', TodoService);

TodoService.$inject = ['$window']; // allows us to use this tool in our service

function TodoService ($window){
  var data = JSON.parse($window.localStorage.getItem('data'));
  console.log($window.localStorage);

  return {

    get: get,
    create: create,
    update: update,
    delete: remove
  };
  function get(){
    return data;
  }
  function create(description){
    data.push({ desc: description });
    $window.localStorage.setItem('data', JSON.stringify(data));
  }
  function update(index, newDescription){
    data.splice(index, 1, { desc: newDescription });
    $window.localStorage.setItem('data', JSON.stringify(data));
  }
  function remove(index){
    data.splice(index, 1);
    $window.localStorage.setItem('data', JSON.stringify(data));
  }
}

}());
