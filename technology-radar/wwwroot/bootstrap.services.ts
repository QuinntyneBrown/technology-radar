
import * as services from "./services";

var app = (<any>angular.module("services", ["apiEndpoint","fetch","formEncode" ]));

app.service("articleService", ["$q", "apiEndpoint", "fetch", services.ArticleService]);
app.service("blogStoryService", ["$q", "apiEndpoint", "fetch", services.BlogStoryService]);
app.service("userService", ["$q", "apiEndpoint", "fetch", "formEncode", services.UserService]);
app.service("frameworkService", ["$q", "apiEndpoint", "fetch", services.FrameworkService]);
app.service("languageService", ["$q", "apiEndpoint", "fetch", services.LanguageService]);
app.service("platformService", ["$q", "apiEndpoint", "fetch", services.PlatformService]);
app.service("searchService", ["$q", "apiEndpoint", "fetch", services.SearchService]);
app.service("tagService", ["$q", "apiEndpoint", "fetch", services.TagService]);
app.service("techniqueService", ["$q", "apiEndpoint", "fetch", services.TechniqueService]);
app.service("toolService", ["$q", "apiEndpoint", "fetch", services.ToolService]);
app.service("youTubeVideoService", ["$q", "apiEndpoint", "fetch", services.YouTubeVideoService]);
