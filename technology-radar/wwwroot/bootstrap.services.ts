
import {

UserService,

FrameworkService,
LanguageService,
PlatformService,
TechniqueService,
ToolService

} from "./services";

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

app.service("frameworkService", ["$q", "apiEndpoint", "fetch", FrameworkService]);
app.service("languageService", ["$q", "apiEndpoint", "fetch", LanguageService]);
app.service("platformService", ["$q", "apiEndpoint", "fetch", PlatformService]);
app.service("techniqueService", ["$q", "apiEndpoint", "fetch", TechniqueService]);
app.service("toolService", ["$q", "apiEndpoint", "fetch", ToolService]);
