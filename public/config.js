"use strict";
angular
    .module("App")
    .config(($routeProvider) => {
        $routeProvider
            .when("/", {

            })
            .otherwise({ redirectTo: "/" });
    });