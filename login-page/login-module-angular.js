(function () {
    'use strict'

    angular.module('client.userAuthentication', ['ui.router', 'ui.mask', 'toastr', 'client.services'])

    angular.module('client.userAuthentication').config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('no-navbar.login', {
                url: '/login',
                views: {
                    'content@no-navbar': {
                        templateUrl: 'client/userAuthentication/login/login.html'
                        , controller: 'loginCtrl as logVm'
                    }
                }
            })
        }
    })();