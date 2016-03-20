angular.module('maintenance', ['core'])
    .controller('locationsCtrl', LocationsCtrl)
    .controller('sitesCtrl', SitesCtrl)
    .controller('typesCtrl', TypesCtrl);

function LocationsCtrl(currentSpot){}
function SitesCtrl(currentSpot) {}
function TypesCtrl() {}
    