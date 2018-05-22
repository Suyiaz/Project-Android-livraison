angular
    .module('ecFooter', ['angularCSS'])
    .directive('ecFooter', function() {
        return {
            restrict: 'E',
            templateUrl: 'footer/footer.template.html'
        }
    });