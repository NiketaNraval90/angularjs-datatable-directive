angular.module('dt-nik')
    .directive('myTable', function ($compile, $timeout) {
        return {
            restrict: 'AE',
            scope: {
                myTableOption: '=',
                mtTableId: '='
            },
            link: function ($scope, elem, attrs, ctrl) {
                $timeout(function () {
                    $scope.myTableOption.createdRow = function (row, data, index) {
                        /*$.each($(row).contents(), function (k, v) {
                        $compile($(v).contents())($scope);
                        })*/
                        $scope.$apply($compile(angular.element(row).contents())($scope));
                    }

                    var table = $.extend($.fn.dataTable.defaults, $scope.myTableOption);
                    $scope.mtTableId = $(elem).DataTable(table);
                });
            }
        };
    });
    