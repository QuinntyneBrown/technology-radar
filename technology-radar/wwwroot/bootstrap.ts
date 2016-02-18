/// <reference path="../typings/tsd.d.ts" />

import { UserActionCreator } from "./actions";

import { userLoggedInReducer } from "./reducers";


require("./bootstrap.services");
require("./bootstrap.components");

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
    
    "components",
    "services",

]));

app.service("userActionCreator", ["dispatcher", "guid", "userService", UserActionCreator]);


app.config(["$routeProvider", "apiEndpointProvider", "initialStateProvider", ($routeProvider, apiEndpointProvider, initialStateProvider) => {
    initialStateProvider.configure({
        brands:[],
        galleries: [],
        photos: [],
        tags: [],
        users: [],
        currentUser: null
    });

    apiEndpointProvider.configure("/api");

    $routeProvider
        .when("/", { template: "<login></login>" })
        .otherwise("/");

}])
    .config(["reducersProvider", reducersProvider => {
        reducersProvider.configure(userLoggedInReducer);
    }])
    .config(["loginRedirectProvider", loginRedirectProvider => loginRedirectProvider.setDefaultUrl("/gallery/list")]);
