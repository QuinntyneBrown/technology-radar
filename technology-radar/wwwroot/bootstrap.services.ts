
import * as services from "./services";

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

app.service("userService", ["$q", "apiEndpoint", "fetch", "formEncode", services.UserService]);
app.service("frameworkService", ["$q", "apiEndpoint", "fetch", services.FrameworkService]);
app.service("languageService", ["$q", "apiEndpoint", "fetch", services.LanguageService]);
app.service("platformService", ["$q", "apiEndpoint", "fetch", services.PlatformService]);
app.service("techniqueService", ["$q", "apiEndpoint", "fetch", services.TechniqueService]);
app.service("toolService", ["$q", "apiEndpoint", "fetch", services.ToolService]);
