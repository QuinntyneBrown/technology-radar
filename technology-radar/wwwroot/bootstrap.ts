/// <reference path="../typings/tsd.d.ts" />

import { userLoggedInReducer } from "./reducers";

require("./bootstrap.services");
require("./bootstrap.components");
require("./bootstrap.actions");

var app = (<any>angular.module("app", [
    "addOrUpdate",
    "apiEndpoint",
    "authInterceptor",
    "fetch",
    "formEncode",
    "invokeAsync",
    "localStorageManager",
    "loginRedirect",
    "routeResolver",
    "routeWhenExtension",
    "safeDigest",
    "store",
    
    "actions",
    "components",
    "services",

]));



app.config(["$routeProvider", "apiEndpointProvider", "initialStateProvider", ($routeProvider, apiEndpointProvider, initialStateProvider) => {
    initialStateProvider.configure({
        frameworks:[],
        languages: [],
        platforms: [],
        techniques: [],
        tools: [],
        currentUser: null
    });

    apiEndpointProvider.configure("/api");

    $routeProvider
        .when("/", { template: "<login></login>" })
        .when("/framework/list", { template: "<framework-list></framework-list>" })
        .when("/language/list", { template: "<language-list></language-list>" })
        .when("/platform/list", { template: "<platform-list></platform-list>" })
        .when("/technique/list", { template: "<technique-list></technique-list>" })
        .when("/tool/list", { template: "<tool-list></tool-list>" })
        .otherwise("/");

}])
    .config(["reducersProvider", reducersProvider => {
        reducersProvider.configure(userLoggedInReducer);
    }])
    .config(["loginRedirectProvider", loginRedirectProvider => loginRedirectProvider.setDefaultUrl("/language/list")]);
