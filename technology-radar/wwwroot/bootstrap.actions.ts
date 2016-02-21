import * as actions from "./actions";

var app = (<any>angular.module("actions", [ "services","store" ]));

app.service("userActionCreator", ["dispatcher", "guid", "userService", actions.UserActionCreator]);
app.service("frameworkActionCreator", ["dispatcher", "frameworkService", "guid", actions.FrameworkActionCreator]);
app.service("languageActionCreator", ["dispatcher", "guid", "languageService", actions.LanguageActionCreator]);
app.service("platformActionCreator", ["dispatcher", "guid", "platformService", actions.PlatformActionCreator]);
app.service("techniqueActionCreator", ["dispatcher", "guid", "techniqueService", actions.TechniqueActionCreator]);
app.service("toolActionCreator", ["dispatcher", "guid", "toolService", actions.ToolActionCreator]);