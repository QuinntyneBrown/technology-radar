
import {
HeaderComponent,
HomeComponent,
AppComponent,
LoginComponent
} from "./components";

var app = (<any>angular.module("components", [
    "store"
]));


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
    component: HomeComponent,
    providers: ["brandActionCreator"]
});
