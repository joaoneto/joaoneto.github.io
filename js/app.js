angular.module('app', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/').otherwise('/');
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/default.tpl.html',
      controller: function ($scope, $state) {
        // $scope.$state = $state;
        $scope.year = new Date().getFullYear();
      }
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: function ($scope, repos) {
        $scope.repos = repos.data.items;
        console.log('HomeCtrl called!');
      },
      resolve: {
        repos: function ($http) {
          return $http.get('https://api.github.com/search/repositories?q=user:joaoneto');
        }
      }
    });
})
