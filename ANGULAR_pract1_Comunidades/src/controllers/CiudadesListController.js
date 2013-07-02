/**
* LibrosListController
* Controlador del listado de libros
*/
function CiudadesListController($scope, $http) {
  $http.get('data/ciudadesEspania.json').success(function(data) {
	$scope.ciudadesEspania = data;
  });
 
  //defines una variable
  $scope.var1 = "variable definida desde el controlador";
  
  //selecciona el desplegable y ordena automaticamente, variable definida en la vista con ng-model
  $scope.orderField = "Nombre";
  $scope.orderReverse = "true";
}