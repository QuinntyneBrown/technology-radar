import {

UserActionCreator,

FrameworkActionCreator,
LanguageActionCreator,
PlatformActionCreator,
TechniqueActionCreator,
ToolActionCreator
} from "./actions";

var app = (<any>angular.module("actions", [
    "services",
    "store"
]));


app.service("userActionCreator", ["dispatcher", "guid", "userService", UserActionCreator]);
app.service("frameworkActionCreator", ["dispatcher", "frameworkService", "guid", FrameworkActionCreator]);
app.service("languageActionCreator", ["dispatcher", "guid", "languageService", LanguageActionCreator]);
app.service("platformActionCreator", ["dispatcher", "guid", "platformService", PlatformActionCreator]);
app.service("techniqueActionCreator", ["dispatcher", "guid", "techniqueService", TechniqueActionCreator]);
app.service("toolActionCreator", ["dispatcher", "guid", "toolService", ToolActionCreator]);