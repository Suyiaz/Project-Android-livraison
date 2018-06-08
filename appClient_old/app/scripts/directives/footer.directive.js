angular
    .module('ecFooter', ['angularCSS'])
    .directive('ecFooter', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/footer.template.html',
            css: 'styles/navbar.style.css'
        }
    });