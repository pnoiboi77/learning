angular.module('maintenance', ['ngRoute'])
    .controller('adminCtrl', AdminCtrl)
  angular.module('maintenance', ['ngRoute'])
    .controller('adminCtrl', AdminCtrl)
    .controller('mainCtrl', MainCtrl)
    .controller('locationsCtrl', LocationsCtrl)
    .controller('sitesCtrl', SitesCtrl)
    .factory('currentSpot', currentSpot)
    .directive('ywActiveMenu', ywActiveMenu)
    .directive('ywMenuId', ywMenuId)
    .config(function ($routeProvider) {
        $routeProvider.when('/locations', {
            templateUrl: './views/locations.html',
            controller: 'locationsCtrl'
        });
        $routeProvider.when('/sites', {
            templateUrl: './views/sites.html',
            controller: 'sitesCtrl'            
        });
        $routeProvider.otherwise({
            templateUrl: './views/main.html',
            controller: 'mainCtrl'
        });
    });

function AdminCtrl($scope, currentSpot) {
    $scope.isActive = isActive;
    $scope.getTitle = getTitle;
    
    function isActive(menuId) {
        return currentSpot.getActiveMenu() == menuId;
    }
    
    function getTitle() {
        return currentSpot.getTitle();
    }
}

function MainCtrl () {
}

function LocationsCtrl() {
}

function SitesCtrl () {
}

function currentSpot() {
    var activeMenuId = '';
    var titleText = '';
    
    return {
        setCurrentSpot: function(menuId, title) {
            activeMenuId = menuId;
            titleText = title;
        },
        getActiveMenu: function() {
            return activeMenuId;
        },
        getTitle: function() {
            return titleText;
        }
    }
}

function ywActiveMenu(currentSpot) {
    return function(scope, element, attrs) {
        var activeMenuId = attrs['ywActiveMenu'];
        var activeTitle = attrs['ywActiveTitle'];
        currentSpot.setCurrentSpot(activeMenuId, activeTitle);
    }
}

function ywMenuId(currentSpot) {
    function setActive(element, menuId) {
        if (currentSpot.getActiveMenu() == menuId) {
            element.addClass('active');
        } else {
            element.removeClass('active');
        }
    }
    
    return function (scropt, element, attrs) {
        var menuId = attrs['ywMenuId']
        setActive(element, menuId);
    }
}