/**
* LibroDetailController
* Controlador de la ficha del libro
* $scope - ámbito
* $http - 
* $routeParams - parámetros de la ruta
*/
function CiudadDetailController($scope, $http, $routeParams) {
  $scope.nombre = $routeParams.ciudadNombre;

  $http.get('data/ciudad'+$scope.nombre+'.json').success(function(data) {
	  $scope.ciudad = data[0];
  });
 
}