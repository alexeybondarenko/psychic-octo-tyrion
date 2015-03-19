'use strict';

App.directive('accord', function () {

    var activeClass = 'is-active';
    return {
        restrict: 'C',
        compile: function (el, attrs) {
            var els =  el.children('.accord__item');
            els.removeClass(activeClass);

            return {
                post: function (scope, elem, attrs) {
                    els.bind('click', function () {
                        console.log(this);
                        els.removeClass(activeClass);
                        angular.element(this).addClass(activeClass);
                    });
                }
            }
        }
    }
});