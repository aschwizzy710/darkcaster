(function() {
  angular.module('intro') // setter syntax --> starts the application
  .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', 'TodoService']; // what tools the Home Controller needs to do service

function HomeController($scope, TodoService){ // $scope is our bridge to the DOM
  $scope.todos = TodoService.get();
  $scope.createTodo = createTodo;
  $scope.deleteTodo = deleteTodo;
  $scope.editTodo = editTodo;
  $scope.saveTodo = saveTodo;

  function createTodo(newTodo){
    TodoService.create(newTodo);
    $scope.newTodo = '';
  }
  function deleteTodo(index){
    TodoService.delete(index);
  }
  function editTodo(todo){
    todo.isBeingEdited = true;
  }
  function saveTodo(index, todo){
    TodoService.update(index, todo.desc);
    todo.isBeingEdited = false;
  }
}
}());
