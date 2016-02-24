import * as actions from "./actions";

var app = (<any>angular.module("actions", [ "services","store" ]));

app.service("userActionCreator", ["dispatcher", "guid", "userService", actions.UserActionCreator]);
app.service("frameworkActionCreator", ["$location","dispatcher", "frameworkService", "guid", actions.FrameworkActionCreator]);
app.service("languageActionCreator", ["$location","dispatcher", "guid", "languageService", actions.LanguageActionCreator]);
app.service("platformActionCreator", ["$location","dispatcher", "guid", "platformService", actions.PlatformActionCreator]);
app.service("techniqueActionCreator", ["$location","dispatcher", "guid", "techniqueService", actions.TechniqueActionCreator]);
app.service("toolActionCreator", ["$location","dispatcher", "guid", "toolService", actions.ToolActionCreator]);
app.service("tabActionCreator", ["dispatcher", actions.TabActionCreator]);