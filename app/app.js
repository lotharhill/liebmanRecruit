/**
 * Created by davidliebman on 5/2/15.
 */
(function(){

    var app = angular.module('lRecruitApp', ['ngRoute']);

    app.config(function($routeProvider){
       $routeProvider
            .when('/', {
                controller: 'JobController',
                templateUrl: 'app/jobs/jobList.html'
           })
            .when('/jobList/',{
                controller:'JobController',
                templateUrl:'app/jobs/jobList.html'

            })

           .when('/job/:jobId', {
               controller: 'JobDetailController',
               templateUrl: 'app/jobs/jobDetail.html'
           })

            .otherwise({ redirectTo: '/'});
    });
}());
