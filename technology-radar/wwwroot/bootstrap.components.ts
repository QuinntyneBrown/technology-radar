
import {
HeaderComponent,
HomeComponent,
AppComponent,
FooterComponent,

FrameworkListComponent,
FrameworkEditorComponent,
LanguageListComponent,
LanguageEditorComponent,
PlatformListComponent,
PlatformEditorComponent,
TechniqueListComponent,
TechniqueEditorComponent,
ToolListComponent,
ToolEditorComponent,

TechnologyComponent,
TechnologiesComponent,

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
    templateUrl: "wwwroot/components/framework-editor.html",
    component: FrameworkEditorComponent,
    selector: "framework-editor",
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
    templateUrl: "wwwroot/components/language-editor.html",
    component: LanguageEditorComponent,
    selector: "language-editor",
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
    templateUrl: "wwwroot/components/platform-editor.html",
    component: PlatformEditorComponent,
    selector: "platform-editor",
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
    templateUrl: "wwwroot/components/technique-editor.html",
    component: TechniqueEditorComponent,
    selector: "technique-editor",
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
    templateUrl: "wwwroot/components/tool-editor.html",
    component: ToolEditorComponent,
    selector: "tool-editor",
    providers: ["toolActionCreator"]
});

app.component({
    routes: ['/frameworks', '/languages', '/platforms', '/techniques', '/tools'],
    templateUrl: "wwwroot/components/technologies.html",
    component: TechnologiesComponent,
    selector: "technologies",
    providers:['$route']
});

app.component({
    route: '/technology/:type/:id',
    templateUrl: "wwwroot/components/technology.html",
    component: TechnologyComponent,
    selector: "technology"
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
    templateUrl: "wwwroot/components/footer.html",
    component: FooterComponent,
    selector: "app-footer"
});

app.component({
    templateUrl: "wwwroot/components/home.html",
    componentName: "homeComponent",
    component: HomeComponent,
    selector: "home",
    providers:["$location"]
});
