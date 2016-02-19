
import {
HeaderComponent,
HomeComponent,
AppComponent,

FrameworkListComponent,
LanguageListComponent,
PlatformListComponent,
TechniqueListComponent,
ToolListComponent,

LoginComponent
} from "./components";

var app = (<any>angular.module("components", [
    "store"
]));

app.component({
    route:"/framework/list",
    templateUrl: "wwwroot/components/framework-list.html",
    component: FrameworkListComponent,
    selector: "framework-list",
    providers: ["frameworkActionCreator"]
});

app.component({
    route: "/language/list",
    templateUrl: "wwwroot/components/language-list.html",
    component: LanguageListComponent,
    selector: "language-list",
    providers: ["languageActionCreator"]
});


app.component({
    route: "/platform/list",
    templateUrl: "wwwroot/components/platform-list.html",
    component: PlatformListComponent,
    selector: "platform-list",
    providers: ["platformActionCreator"]
});


app.component({
    route: "/technique/list",
    templateUrl: "wwwroot/components/technique-list.html",
    component: TechniqueListComponent,
    selector: "technique-list",
    providers: ["techniqueActionCreator"]
});


app.component({
    route: "/tool/list",
    templateUrl: "wwwroot/components/tool-list.html",
    component: ToolListComponent,
    selector: "tool-list",
    providers: ["toolActionCreator"]
});


app.component({
    templateUrl: "wwwroot/components/app.html",
    component: AppComponent,
    selector: "app"
});

app.component({
    templateUrl: "wwwroot/components/login.html",
    component: LoginComponent,
    providers: ["invokeAsync", "loginRedirect", "userActionCreator"],
    selector: "login"
});



app.component({
    templateUrl: "wwwroot/components/header.html",
    providers: ["$rootScope", "$route"],
    component: HeaderComponent,
    selector: "app-header"
});

app.component({
    templateUrl: "wwwroot/components/home.html",
    componentName: "homeComponent",
    component: HomeComponent
});
