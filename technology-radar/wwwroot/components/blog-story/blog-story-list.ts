import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    route: "/language/edit/:id",
    templateUrl: "wwwroot/components/language/language-editor.html",
    selector: "language-editor",
    providers: ["$location", "$routeParams", "invokeAsync", "languageActionCreator"]
})
@CanActivate(["$route", "invokeAsync", "languageActionCreator", ($route, invokeAsync, languageActionCreator) => {
    var id = $route.current.params.id;
    return invokeAsync({
        action: languageActionCreator.getById,
        params: { id: id }
    });
}])
export class BlogStoryListComponent {

}