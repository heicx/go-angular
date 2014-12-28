angular.module( 'todoApp', [] )
	.controller( "todos", [ "$scope", function( $scope ){
		$scope.todoList = [];
		$scope.add = function(){
			$scope.todoList.push($scope.txt);
		}
	} ])