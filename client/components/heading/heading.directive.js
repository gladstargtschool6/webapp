'use strict';

angular.module('app').directive('heading', function() {
  return {
    templateUrl: 'components/heading/heading.html',
    scope: {
      badge: '=',
      menuItems: '=',
      text: '='
    },
    restrict: 'E'
  };
});
