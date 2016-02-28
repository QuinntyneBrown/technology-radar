import * as components from "./components";

var app = (<any>angular.module("components", ["store"]));

app.component({
    route:"/framework/list",
    templateUrl: "wwwroot/components/framework/framework-list.html",
    component: components.FrameworkListComponent,
    selector: "framework-list",
    providers: ["frameworkActionCreator"]
});

app.component({
    route: "/framework/edit/:id",
    templateUrl: "wwwroot/components/framework/framework-editor.html",
    component: components.FrameworkEditorComponent,
    selector: "framework-editor",
    providers: ["$location","$routeParams","invokeAsync", "frameworkActionCreator"]
});

app.component((<any>components.LanguageListComponent).config);

app.component((<any>components.LanguageEditorComponent).config);

app.component({
    route: "/platform/list",
    templateUrl: "wwwroot/components/platform/platform-list.html",
    component: components.PlatformListComponent,
    selector: "platform-list",
    providers: ["platformActionCreator"]
});

app.component({
    route: "/platform/edit/:id",
    templateUrl: "wwwroot/components/platform/platform-editor.html",
    component: components.PlatformEditorComponent,
    selector: "platform-editor",
    providers: ["$location", "$routeParams", "invokeAsync", "platformActionCreator"]
});


app.component({
    route: "/tag/list",
    templateUrl: "wwwroot/components/tag/tag-list.html",
    component: components.TagListComponent,
    selector: "tag-list",
    providers: ["tagActionCreator"]
});

app.component({
    route: "/tag/edit/:id",
    templateUrl: "wwwroot/components/tag/tag-editor.html",
    component: components.TagEditorComponent,
    selector: "tag-editor",
    providers: ["$location", "$routeParams", "invokeAsync", "tagActionCreator"]
});


app.component({
    route: "/technique/list",
    templateUrl: "wwwroot/components/technique/technique-list.html",
    component: components.TechniqueListComponent,
    selector: "technique-list",
    providers: ["techniqueActionCreator"]
});

app.component({
    route: "/technqiue/edit/:id",
    templateUrl: "wwwroot/components/technique/technique-editor.html",
    component: components.TechniqueEditorComponent,
    selector: "technique-editor",
    providers: ["$location", "$routeParams", "invokeAsync", "techniqueActionCreator"]
});

app.component({
    route: "/tool/list",
    templateUrl: "wwwroot/components/tool/tool-list.html",
    component: components.ToolListComponent,
    selector: "tool-list",
    providers: ["toolActionCreator"]
});

app.component({
    route: "/tool/edit/:id",
    templateUrl: "wwwroot/components/tool/tool-editor.html",
    component: components.ToolEditorComponent,
    selector: "tool-editor",
    providers: ["$location", "$routeParams", "invokeAsync", "toolActionCreator"]
});

app.component({
    routes: ['/frameworks', '/languages', '/platforms', '/techniques', '/tools'],
    templateUrl: "wwwroot/components/technology/technologies.html",
    component: components.TechnologiesComponent,
    selector: "technologies",
    providers:['$route']
});

app.component({
    route: '/technology/:technology/:id',
    templateUrl: "wwwroot/components/technology/technology.html",
    component: components.TechnologyComponent,
    selector: "technology"
});

app.component({
    templateUrl: "wwwroot/components/technology/technology-tile.html",
    component: components.TechnologyTileComponent,
    selector: "technology-tile",
    inputs:['technology']
});

app.component({
    templateUrl: "wwwroot/components/technology/technology-list.html",
    component: components.TechnologyListComponent,
    selector: "technology-list",
    inputs: ['entities'],
    providers: [
        '$attrs',
        'frameworkActionCreator',
        'languageActionCreator',
        'platformActionCreator',
        'techniqueActionCreator',
        'toolActionCreator']
});

app.component({
    templateUrl: "wwwroot/components/general/app.html",
    component: components.AppComponent,
    selector: "app",
    providers:["userActionCreator"]
});

app.component({
    templateUrl: "wwwroot/components/general/login.html",
    component: components.LoginComponent,
    providers: ["invokeAsync", "loginRedirect", "userActionCreator"],
    selector: "login"
});

app.component({
    templateUrl: "wwwroot/components/general/header.html",
    providers: ["$rootScope", "$route","userActionCreator"],
    component: components.HeaderComponent,
    selector: "app-header"
});

app.component({
    templateUrl: "wwwroot/components/general/footer.html",
    component: components.FooterComponent,
    selector: "app-footer",
    providers: ["userActionCreator"]
});

app.component({
    templateUrl: "wwwroot/components/general/admin-header.html",
    component: components.AdminHeaderComponent,
    selector: "admin-header",
    providers: ["userActionCreator"]
});

app.component({
    templateUrl: "wwwroot/components/general/home.html",
    componentName: "homeComponent",
    component: components.HomeComponent,
    selector: "home",
    providers:["$location"]
});

app.component({
    templateUrl: "wwwroot/components/shared/button.html",
    componentName: "trButtonComponent",
    component: components.ButtonComponent,
    inputs: ['caption','onClick'],
    selector: "tr-button"
});

app.component({
    templateUrl: "wwwroot/components/shared/form-control.html",
    componentName: "formControlComponent",
    component: components.FormControlComponent,
    selector: "form-control"
});

app.component({
    templateUrl: "wwwroot/components/shared/input-field.html",
    componentName: "inputFieldComponent",
    component: components.InputFieldComponent,
    inputs: ['placeholder'],
    selector: "input-field"
});

app.component({
    templateUrl: "wwwroot/components/shared/tab-content.html",
    component: components.TabContentComponent,
    transclude: true,
    selector: "tab-content",
    providers: ['tabActionCreator']
});

app.component({
    templateUrl: "wwwroot/components/shared/tab-title.html",
    component: components.TabTitleComponent,
    transclude: true,
    selector: "tab-title",
    providers: ["$attrs","tabActionCreator"]
});

app.component({
    templateUrl: "wwwroot/components/shared/tabs.html",
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
