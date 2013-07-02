angular.module('app', []).

  //definimos las rutas de la 'app'
  config(['$routeProvider', function($routes) {
  
  $routes.
      when('/ciudades', {
		  templateUrl: 'src/views/ciudades-list.html',
		  controller: CiudadesListController
		  }).
	  
	  //mediante dos puntos (:) definimos un parámetro
      when('/ciudad/:ciudadNombre', {
		  templateUrl: 'src/views/ciudad.html',
		  controller: CiudadDetailController
		  }).
	 
	  //cualquier ruta no definida  
      otherwise({
		  redirectTo: '/ciudades'});

}]);