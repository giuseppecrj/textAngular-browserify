angular.module('app', ['textAngular'])
  .directive('exampleDirective', function() {
    return {
      template: '<h1>textAngular</h1><p>A wysiwyg with previewing capabilities</p><br />'
    }
  })
  .controller('MainController', function() {

    var vm = this

    vm.submit = function() {
      console.log(vm.credentials)
    }

  })