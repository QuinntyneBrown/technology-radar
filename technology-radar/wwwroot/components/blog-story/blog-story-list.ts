import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    route: "/blogstory/edit/:id",
    templateUrl: "wwwroot/components/blog-story/blog-story-editor.html",
    selector: "blog-story-editor",
    providers: ["$location", "$routeParams", "invokeAsync", "blogStoryActionCreator"]
})
@CanActivate(["$route", "invokeAsync", "languageActionCreator", ($route, invokeAsync, blogStoryActionCreator) => {
    var id = $route.current.params.id;
    return invokeAsync({
        action: blogStoryActionCreator.getById,
        params: { id: id }
    });
}])
export class BlogStoryListComponent {}