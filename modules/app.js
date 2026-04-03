//IIFE FOR VARIABLE ENCAPSULATION
(function() {
  //CREATE MAIN ANGULAR MODULE AND INJECT DEPENDENCIES
  angular.module('lauraSandoval', ['routerModule'])
    .controller('lauraCtrl', lauraController);
    function lauraController(){
      var lauraCtrl = this;
      lauraCtrl.parallax = function () {
        // AJAX call for parallax function
        $('.parallax').parallax();
      };
      lauraCtrl.accordion = function () {
        // AJAX call for accordion function
        $('.collapsible').collapsible({
          accordion : false
        });
      };
    };
}());
