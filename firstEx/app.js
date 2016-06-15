var app = angular.module("App", []);

app.controller("MainCtrl", function($scope) {

	$scope.order = "note"
	$scope.users = [
					{
						name: "albert",
						value: 3,
						lastName: "delajungle",
						note: 14
					},
					{
						name: "bertrand",
						value: 2,
						lastName: "oustaki",
						note: 18
					},
					{
						name: "cichel",
						value: 7,
						lastName: "ictoire",
						note: 11
					},
					{
						name: "datthieu",
						value: 5,
						lastName: "astina",
						note: 5
				},
					{
						name: "evril",
						value: 4,
						lastName: "mai",
						note: 3
				},
					{
						name: "frenom",
						value: 8,
						lastName: "om",
						note: 10
					},
	];

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});

});