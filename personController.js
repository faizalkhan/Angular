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


app.controller('formcontrol', function($scope)
{

	$scope.master = { firstname:"john", lastname:"Doe" };
	$scope.reset = function()
	{
		$scope.user = angular.copy($scope.master);
	}
	 $scope.reset();
}
);

app.controller('validationcontrol', function($scope)
{
	$scope.user = "imran";
	$scope.email= "imran.deo@gmail.com";
})

app.controller('apis', function($scope)
{
	//$scope.x1 ="JOHN";
	//$scope.x2= angular.lowercase($scope.x1);
	
	$scope.x1 ="John";
	$scope.x2= angular.isNumber($scope.x1);
	
});


app.controller('stylehero', function($scope) {
$scope.fName = '';
$scope.lName = '';
$scope.passw1 = '';
$scope.passw2 = '';
$scope.users = [
{id:1, fName:'Hege', lName:"Pege" },
{id:2, fName:'Kim',  lName:"Pim" },
{id:3, fName:'Sal',  lName:"Smith" },
{id:4, fName:'Jack', lName:"Jones" },
{id:5, fName:'John', lName:"Doe" },
{id:6, fName:'dPeter',lName:"Pan" }
];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false;

$scope.editUser = function(id) {
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.fName = '';
    $scope.lName = '';
    } else {
    $scope.edit = false;
    $scope.fName = $scope.users[id-1].fName;
    $scope.lName = $scope.users[id-1].lName;
  }
};

$scope.$watch('passw1',function() {$scope.test();});
$scope.$watch('passw2',function() {$scope.test();});
$scope.$watch('fName', function() {$scope.test();});
$scope.$watch('lName', function() {$scope.test();});

$scope.test = function() {
  if ($scope.passw1 !== $scope.passw2) {
    $scope.error = true;
    } else {
    $scope.error = false;
  }
  $scope.incomplete = false;
  if ($scope.edit && (!$scope.fName.length ||
  !$scope.lName.length ||
  !$scope.passw1.length || !$scope.passw2.length)) {
     $scope.incomplete = true;
  }
};

});