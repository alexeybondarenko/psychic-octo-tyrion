'use strict';

App.directive('fieldPassword', function () {
    return {
        restrict: 'C',
        link: function (scope, el) {
            var iconEl = angular.element(el[0].querySelector('.icon')),
                inputEl = angular.element(el[0].querySelector('input.input'));

            var type;
            function toggleType () {
                type = inputEl.attr('type');
                inputEl.attr('type',  type === 'text' ? 'password' : 'text');
                iconEl.removeClass('icon-eye icon-eye-disabled');
                iconEl.addClass((type == 'text') ? 'icon-eye' : 'icon-eye-disabled');
            }
            iconEl.bind('click', function () {
                console.log('field password');
                toggleType();
            });
        }
    }
});