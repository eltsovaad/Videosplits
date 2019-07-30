var myApp=angular.module('myApp');
myApp.controller('Controller', function($scope,$http) {
    $http({method: 'GET', url: 'db.json'}).
    then(function success(response) {
        $scope.competition=response.data;
    });
    $scope.tab='All';
    $scope.filtText='';
    $scope.trId=0;
    $scope.tdId=0;
    $scope.reset = function() {
        $scope.tab='All';
        $scope.filtText='';
        $scope.fstNme='';
        $scope.lstNme='';
    };
    $scope.select = function(cat) {
        $scope.tab=cat;
        $scope.filtText=(cat==='All')?'':cat;
    };
    $scope.isSelected = function(checkTab) {
        return ($scope.tab === checkTab);
    };
    $scope.navig=function(){
    }
    $scope.getId=function(Id){
        Id=Id+1;
        return(Id);
    }

});