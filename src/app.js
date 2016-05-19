'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'app.view',
    'ngRoute'
]);


angular.module('app').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
}]);
