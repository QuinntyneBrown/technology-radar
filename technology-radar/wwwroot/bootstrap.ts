/// <reference path="../typings/tsd.d.ts" />

require("./bootstrap.services");
require("./bootstrap.components");
require("./bootstrap.actions");
require("./bootstrap.reducers");

import { Responsivir } from "../libs";

var app = (<any>angular.module("app", [

    "ngSanitize",

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
    "reducers",
    "services",

    "ui.tinymce"

]));



app.config(["$routeProvider", "apiEndpointProvider", "initialStateProvider", "localStorageManagerProvider", ($routeProvider, apiEndpointProvider, initialStateProvider, localStorageManagerProvider) => {

    if (!localStorageManagerProvider.get({ name: "initialState" }))
        localStorageManagerProvider.put({
            name: "initialState", value: {
                frameworks: [],
                languages: [],
                platforms: [],
                techniques: [],
                tools: [],
                currentUser: null
            }
        });

    initialStateProvider.configure(localStorageManagerProvider.get({ name: "initialState" }));

    apiEndpointProvider.configure("/api");

    $routeProvider
        .when("/", { template: "<home></home>" })
        .when("/login", { template: "<login></login>" })
        .when("/framework/list", { template: "<framework-list></framework-list>" })
        .when("/language/list", { template: "<language-list></language-list>" })
        .when("/platform/list", { template: "<platform-list></platform-list>" })
        .when("/technique/list", { template: "<technique-list></technique-list>" })
        .when("/tool/list", { template: "<tool-list></tool-list>" })

        .when("/frameworks", { template: "<technology></technology>" })
        .when("/languages", { template: "<technology></technology>" })
        .when("/platforms", { template: "<technology></technology>" })
        .when("/techniques", { template: "<technology></technology>" })
        .when("/tools", { template: "<technology></technology>" })

        .otherwise("/");

    new Responsivir(window);
}])
    .config(["loginRedirectProvider", loginRedirectProvider => loginRedirectProvider.setDefaultUrl("/language/list")]);    
