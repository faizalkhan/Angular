app.controller('personCtrl', function($scope)

{
	$scope.first ="anu";
	$scope.last ="raj";
	$scope.twoname = function()
	{
		return $scope.first + " " + $scope.last;
	}

})

app.controller('namesCtrl', function($scope)
{
	
	$scope.cars = [
	{name:'BMW',  country:'Germany'},
	{name:'Audi', country:'India' },
	{name:'Duston', country:'japan'}
	]
	
})

app.controller('formnames', function($scope, $http)
{
	$http.get("http://localhost:8090/basic/output.php")
	.success(function(response)
	{
		$scope.form = response;
		//console.log($scope.form);
	});
	
})
app.controller('counters', function($scope)
{
	$scope.count = 0;
})

app.controller('goodness', function($scope)
{
	
	$scope.firstnameis ="john";
	$scope.lastnameis ="milton";
	$scope.care=false;
	$scope.toggle = function()
	{
		$scope.care = !$scope.care;
	}
});