/// <reference path="../typings/tsd.d.ts" />

require("./bootstrap.services");
require("./bootstrap.components");
require("./bootstrap.actions");
require("./bootstrap.reducers");

import { Responsivir, RouteParams } from "../libs";

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

app.service("routeParams", ["$routeParams", RouteParams]);

app.config(["$routeProvider", "apiEndpointProvider", "initialStateProvider", "localStorageManagerProvider", ($routeProvider, apiEndpointProvider, initialStateProvider, localStorageManagerProvider) => {

    var localStorageInitialState = localStorageManagerProvider.get({ name: "initialState" });

    if (!localStorageInitialState)
        localStorageManagerProvider.put({
            name: "initialState", value: {
                articles:[],
                frameworks: [],
                languages: [],
                platforms: [],
                tags:[],
                techniques: [],
                tools: [],
                youTubeVideos: [],
                searchResults: null,
                searchTerm:null,
                tabIndex: {},
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
        .when("/tag/list", { template: "<tag-list></tag-list>" })
        .when("/technique/list", { template: "<technique-list></technique-list>" })
        .when("/tool/list", { template: "<tool-list></tool-list>" })

        .when("/framework/edit/:id", { template: "<framework-list></framework-list>" })
        .when("/language/edit/:id", { template: "<language-list></language-list>" })
        .when("/platform/edit/:id", { template: "<platform-list></platform-list>" })
        .when("/tag/edit/:id", { template: "<tag-list></tag-list>" })
        .when("/technique/edit/:id", { template: "<technique-list></technique-list>" })
        .when("/tool/edit/:id", { template: "<tool-list></tool-list>" })

        .when("/frameworks", { template: "<technologies></technologies>" })
        .when("/languages", { template: "<technologies></technologies>" })
        .when("/platforms", { template: "<technologies></technologies>" })
        .when("/techniques", { template: "<technologies></technologies>" })
        .when("/tools", { template: "<technologies></technologies>" })
        .when('/technology/:technology/:id', { template: "<technology></technology>" })

        .when('/search', { template: "<search></search>" })

        .otherwise("/");

    new Responsivir(window);
}])
    .config(["loginRedirectProvider", loginRedirectProvider => loginRedirectProvider.setDefaultUrl("/language/list")]);    
