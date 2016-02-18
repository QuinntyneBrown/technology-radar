
import { UserService } from "./services";

var app = (<any>angular.module("services", [
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
    "store"
]));


app.service("userService", ["$q", "apiEndpoint", "fetch", "formEncode", UserService]);