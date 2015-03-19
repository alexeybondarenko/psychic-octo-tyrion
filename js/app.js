'use strict';

var App = angular.module('app', ['ui.router']);

App.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .state('signin', {
            url: '/signin',
            templateUrl: 'views/signin.html',
            controller: 'SigninController'
        })
        .state('money-transfer', {
            url: '/money-transfer',
            templateUrl: 'views/money-transfer.html'
        })
        .state('permissions-request', {
            url: '/permissions-request',
            templateUrl: 'views/permissions-request.html',
            controller: 'PermissionsRequestController'
        })
        .state('receive-transfer', {
            url: '/receive-transfer',
            templateUrl: 'views/receive-transfer.html'
        })
        .state('success-transfer', {
            url: '/success-transfer',
            templateUrl: 'views/success-transfer.html'
        });

    $urlRouterProvider.otherwise('/login');
});