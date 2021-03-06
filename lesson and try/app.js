var monApplication = angular.module("monApplication", [])

monApplication.controller("monControleur", function($scope){
		$scope.title = "Titre du premier controller";
		$scope.user = {name: "jérémie", lastName: "Noël"};
// ---------------------------------------------

		$scope.username = "";
		$scope.password = "";

// -----------------------------------------------

		$scope.HideAndShow = true;
// -----------------------------------------------

		$scope.accountType = "premium";
// -----------------------------------------------

		$scope.link = "www.google.com/fr"
// -----------------------------------------------

		$scope.classTest = {complete: true, isFalse: false}
// -----------------------------------------------
		$scope.repeat = [
						{name:"antoine", 
						lastName:"dassouin"},
						{name:"valentin",
						lastName: "dassiati"},
						{name: "mamadou",
						lastName: "coulibali"}
						];

// -------------------------------------------------

		$scope.quantity = 4;
		$scope.order = "name";
		$scope.query = "";


		$scope.repeatOrder = [
						{name: "items1", 
						value: 7},
						{name: "items2", 
						value: 4},
						{name: "items3", 
						value: 3},
						{name: "items4", 
						value: 5},
						{name: "items5", 
						value: 6},
						{name: "items6", 
						value: 7}
						];

});

monApplication.controller("monSecondControleur", function($scope) {
		$scope.title = "titre de l'application, du second controller, du controller enfant";
});

monApplication.controller("eventController", function($scope) {

			$scope.sum = 0;

	$scope.increment = function() {
		$scope.sum = $scope.sum + 1;
	}
// -------------------------------------------------

		$scope.name = null;
		$scope.welcomeMessage = null;

		$scope.modif = function() {
			if ($scope.name) {
			$scope.welcomeMessage = 'hello ' + $scope.name;
			}
			else {
				$scope.welcomeMessage = "";
			}
		}

// --------------------------------------------------

		$scope.data = "";
		$scope.message = null;

		$scope.sendForm = function() {
			$scope.message = "Formulaire soumis avec la valeur : " + $scope.data;
		}
// ---------------------------------------------------

		$scope.userName = "try";
		$scope.log = null;

		$scope.$watch(function() {
			return $scope.userName;
		}, function(newValue, oldValue) {
			$scope.log = "Nouvelle valeur : " + newValue + " | ancienne valeur : " + oldValue;
		});

});