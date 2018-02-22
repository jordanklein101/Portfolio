(function () {
    'use strict'

angular.module('client.services')
.factory('userService', UserService)

UserService.$inject = ['$http', '$q']

function UserService($http, $q) {
return {
    login: _login,
}

function _login(data) {
    return $http.post('/api/users/login', data)
        .then(_onSuccess)
        .catch(_onError)
}



function _onSuccess(response) {
    return response.data
}

function _onError(error) {
    return $q.reject(error.data)
}

}

})()