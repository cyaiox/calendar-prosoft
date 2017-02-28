var app = angular.module('app.calendar', []);

app.controller('calendarCtrl', function($scope) {
    $scope.months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    $scope.show_calendar = false;
    $scope.start_date = '02/22/2017';
    $scope.number_of_days = 7;

    $scope.getNumber = function(num) {
        return new Array(num);
    };

    $scope.generateCalendar = function() {
        $scope.show_calendar = true;
        $scope.header_title = "";

        var d = new Date($scope.start_date);
        var actual_month = d.getMonth();
        var actual_year = d.getFullYear();
        var days = 0;

        $scope.start_month = d.getMonth();
        $scope.start_year = d.getFullYear();

        $scope.number_of_year = 0;
        $scope.number_of_month = 0;
        $scope.number_of_week = 0;

        $scope.calendar = [];
        $scope.calendar[$scope.number_of_year] = [];
        $scope.calendar[$scope.number_of_year][$scope.number_of_month] = [];
        $scope.calendar[$scope.number_of_year][$scope.number_of_month][$scope.number_of_week] = [];

        for(i = 0; i < d.getDay(); i++) {
            $scope.calendar[$scope.number_of_year][$scope.number_of_month][$scope.number_of_week].push(0);
        }

        $scope.calendar[$scope.number_of_year][$scope.number_of_month][$scope.number_of_week].push(d.getDate());

        for(i = (d.getDay() + 1); i < 7; i++) {
            days++;
            d.setDate(d.getDate() + 1);
            $scope.calendar[$scope.number_of_year][$scope.number_of_month][$scope.number_of_week].push((d.getDate()));
        }

        while(days < $scope.number_of_days) {
            $scope.number_of_week++;
            $scope.calendar[$scope.number_of_year][$scope.number_of_month][$scope.number_of_week] = [];
            for(i = 0; i < 7; i++){
                if(days < $scope.number_of_days) {
                    d.setDate(d.getDate() + 1);
                    if (d.getFullYear() != actual_year) {
                        actual_year = d.getFullYear();
                        actual_month = d.getMonth();
                        //$scope.start_month = 0;
                        $scope.number_of_year++;
                        $scope.number_of_month = 0;
                        $scope.number_of_week = 0;
                        $scope.calendar[$scope.number_of_year] = [];
                        $scope.calendar[$scope.number_of_year][$scope.number_of_month] = [];
                        $scope.calendar[$scope.number_of_year][$scope.number_of_month][$scope.number_of_week] = [];
                        for(i = 0; i < d.getDay(); i++) {
                            $scope.calendar[$scope.number_of_year][$scope.number_of_month][$scope.number_of_week].push(0);
                        }
                    }else if (d.getMonth() != actual_month) {
                        actual_month = d.getMonth();
                        $scope.number_of_month++;
                        $scope.number_of_week = 0;
                        $scope.calendar[$scope.number_of_year][$scope.number_of_month] = [];
                        $scope.calendar[$scope.number_of_year][$scope.number_of_month][$scope.number_of_week] = [];
                        for(i = 0; i < d.getDay(); i++) {
                            $scope.calendar[$scope.number_of_year][$scope.number_of_month][$scope.number_of_week].push(0);
                        }
                    }
                    $scope.calendar[$scope.number_of_year][$scope.number_of_month][$scope.number_of_week].push(d.getDate());
                } else {
                    $scope.calendar[$scope.number_of_year][$scope.number_of_month][$scope.number_of_week].push(0);
                }
                days++;
            }
        }

        console.log($scope.calendar);
    };

});