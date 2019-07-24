var myApp=angular.module('myApp');
myApp.controller('Controller', function($scope,$http) {
    $http({method: 'GET', url: 'db.json'}).
    then(function success(response) {
        $scope.competition=response.data;
    });
    $scope.tab='All';
    $scope.filtText='';
    $scope.reset = function() {
        $scope.tab='All';
        $scope.filtText='';
        $scope.fstNme='';
        $scope.lstNme='';
    };
    $scope.select = function(cat) {
        //что-то для очистки выпадающего списка
        $scope.mymo="Not string";
        if(angular.isString(cat)){
            $scope.mymo="String";
        }
        $scope.tab=cat;
        $scope.filtText=(cat==='All')?'':cat;
    };
    $scope.isSelected = function(checkTab) {
        $scope.myma="Not string";
        if(angular.isString(cat)){
            $scope.myma="String";
        }
        return ($scope.tab === checkTab);

    }
/*$scope.competition=[{
    cat: 'M21',
    competitors:[{
        lastName: "Pupkin",
        firstName: "Vasily",
        bib:'111',
        splits : [
            {
                name: "КП 78",
                link: "https://youtube.com/..."
            },
            {
                name: "КП 123",
                link: null
            }
            ]
    },
        {
            lastName: "Pupkin",
            firstName: "Иван",
            bib:'111',
            splits : [
                {
                    name: "КП 78",
                    link: "https://youtube.com/..."
                },
                {
                    name: "КП 123",
                    link: null
                }
            ]
        }

    ]
},{
    cat: "W21",
    competitors : [
        {
            lastName: "Иванова",
            firstName: "Анна",
            bib:'114',
            splits : [
                {
                    name: "КП 78",
                    link: "https://youtube.com/..."
                },
                {
                    name: "КП 123",
                    link: null
                }
            ]
        },
        {
            lastName: "Иванова",
            firstName: "Анна",
            bib:'112',
            splits : [
                {
                    name: "КП 78",
                    link: "https://youtube.com/..."
                },
                {
                    name: "КП 123",
                    link: null
                }
            ]
        }
    ]
}
    ]*/

});