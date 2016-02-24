import * as components from "./components";

var app = (<any>angular.module("components", [ "store" ]));

app.component({
    route:"/framework/list",
    templateUrl: "wwwroot/components/framework-list.html",
    component: components.FrameworkListComponent,
    selector: "framework-list",
    providers: ["frameworkActionCreator"]
});

app.component({
    templateUrl: "wwwroot/components/framework-editor.html",
    component: components.FrameworkEditorComponent,
    selector: "framework-editor",
    providers: ["invokeAsync", "frameworkActionCreator"]
});

app.component({
    route: "/language/list",
    templateUrl: "wwwroot/components/language-list.html",
    component: components.LanguageListComponent,
    selector: "language-list",
    providers: ["languageActionCreator"]
});

app.component({
    templateUrl: "wwwroot/components/language-editor.html",
    component: components.LanguageEditorComponent,
    selector: "language-editor",
    providers: ["invokeAsync","languageActionCreator"]
});

app.component({
    route: "/platform/list",
    templateUrl: "wwwroot/components/platform-list.html",
    component: components.PlatformListComponent,
    selector: "platform-list",
    providers: ["platformActionCreator"]
});

app.component({
    templateUrl: "wwwroot/components/platform-editor.html",
    component: components.PlatformEditorComponent,
    selector: "platform-editor",
    providers: ["invokeAsync", "platformActionCreator"]
});


app.component({
    route: "/technique/list",
    templateUrl: "wwwroot/components/technique-list.html",
    component: components.TechniqueListComponent,
    selector: "technique-list",
    providers: ["techniqueActionCreator"]
});

app.component({
    templateUrl: "wwwroot/components/technique-editor.html",
    component: components.TechniqueEditorComponent,
    selector: "technique-editor",
    providers: ["invokeAsync", "techniqueActionCreator"]
});

app.component({
    route: "/tool/list",
    templateUrl: "wwwroot/components/tool-list.html",
    component: components.ToolListComponent,
    selector: "tool-list",
    providers: ["toolActionCreator"]
});

app.component({
    templateUrl: "wwwroot/components/tool-editor.html",
    component: components.ToolEditorComponent,
    selector: "tool-editor",
    providers: ["invokeAsync", "toolActionCreator"]
});

app.component({
    routes: ['/frameworks', '/languages', '/platforms', '/techniques', '/tools'],
    templateUrl: "wwwroot/components/technologies.html",
    component: components.TechnologiesComponent,
    selector: "technologies",
    providers:['$route']
});

app.component({
    route: '/technology/:technology/:id',
    templateUrl: "wwwroot/components/technology.html",
    component: components.TechnologyComponent,
    selector: "technology"
});

app.component({
    templateUrl: "wwwroot/components/technology-tile.html",
    component: components.TechnologyTileComponent,
    selector: "technology-tile",
    inputs:['technology']
});

app.component({
    templateUrl: "wwwroot/components/technology-list.html",
    component: components.TechnologyListComponent,
    selector: "technology-list"
});

app.component({
    templateUrl: "wwwroot/components/app.html",
    component: components.AppComponent,
    selector: "app"
});

app.component({
    templateUrl: "wwwroot/components/login.html",
    component: components.LoginComponent,
    providers: ["invokeAsync", "loginRedirect", "userActionCreator"],
    selector: "login"
});

app.component({
    templateUrl: "wwwroot/components/header.html",
    providers: ["$rootScope", "$route"],
    component: components.HeaderComponent,
    selector: "app-header"
});

app.component({
    templateUrl: "wwwroot/components/footer.html",
    component: components.FooterComponent,
    selector: "app-footer"
});

app.component({
    templateUrl: "wwwroot/components/home.html",
    componentName: "homeComponent",
    component: components.HomeComponent,
    selector: "home",
    providers:["$location"]
});

app.component({
    templateUrl: "wwwroot/components/button.html",
    componentName: "trButtonComponent",
    component: components.ButtonComponent,
    inputs: ['caption','onClick'],
    selector: "tr-button"
});

app.component({
    templateUrl: "wwwroot/components/form-control.html",
    componentName: "formControlComponent",
    component: components.FormControlComponent,
    selector: "form-control"
});

app.component({
    templateUrl: "wwwroot/components/input-field.html",
    componentName: "inputFieldComponent",
    component: components.InputFieldComponent,
    selector: "input-field"
});

app.component({
    templateUrl: "wwwroot/components/tab-content.html",
    component: components.TabContentComponent,
    transclude: true,
    selector: "tab-content",
    providers: ['tabActionCreator']
});

app.component({
    templateUrl: "wwwroot/components/tab-title.html",
    component: components.TabTitleComponent,
    transclude: true,
    selector: "tab-title",
    providers: ["$attrs","tabActionCreator"]
});

app.component({
    templateUrl: "wwwroot/components/tabs.html",
    component: components.TabsComponent,
    selector: "tabs",
    transclude: {
        'title': '?tabTitle',
        'content': '?tabContent'
    },
    providers: [
        '$attrs',
        '$element',
        'tabActionCreator'
    ]
});
