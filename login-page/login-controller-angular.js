(function () {

    'use strict'

    angular
        .module('client.userAuthentication')
        .controller('loginCtrl', LoginCtrl)

    LoginCtrl.$inject = ['userService', '$state', '$log']

    function LoginCtrl(userService, $state, $log) {

        let vm = this

        vm.userService = userService
        vm.items = null
        vm.submit = _submit
        vm.needToRegister = _needToRegister
        vm.form = {}
        vm.hasValidationError = _hasValidationError
        vm.showValidationError = _showValidationError
        vm.id = null

        init()


        vm.editForm = null
        function init() {
        }

        function _submit() {
            vm.userService.login(vm.items)
                .then(data => {
                    location.pathname = '/'
                })
                .catch(data => $log.log(`Error: ${data.errors}`))
        }
        function _needToRegister() {
            $state.go('^.register')
        }


        function _hasValidationError(name) {
            return (vm.editForm.$submitted || vm.editForm[name].$dirty)
                && vm.editForm[name].$invalid
        }
        function _showValidationError(name, rule) {
            return (vm.editForm.$submitted || vm.editForm[name].$dirty)
                && vm.editForm[name].$error[rule]
        }
    }
})();