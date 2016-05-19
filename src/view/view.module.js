(function () {
    angular.module('app.view', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/view', {
                templateUrl: 'view/view.html',
                controller: 'ViewController'
            });
        }]);
})();