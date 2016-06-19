var app = angular.module("monApplication", [])

app.controller("monControleur", function($scope){
		
	$scope.todos = [
				{doing: "coder", action: false},
				{doing: "coder", action: false},
				{doing: "coder", action: false},
				{doing: "coder", action: false},
				{doing: "coder", action: false}
	]

	$scope.addTodo = function () {
    	$scope.todos.push({doing: $scope.formTodoText, done:false});
    	$scope.formTodoText = '';
  };
});