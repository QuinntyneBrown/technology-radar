import { BlogStoryActionCreator, RemoveBlogStoryAction } from "../../actions";
import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    route: "/blogstory/edit/:id",
    templateUrl: "wwwroot/components/blog-story/blog-story-editor.html",
    selector: "blog-story-editor",
    providers: ["$location", "$routeParams", "invokeAsync", "languageActionCreator"]
})
    @CanActivate(["$route", "invokeAsync", "blogStoryActionCreator", ($route, invokeAsync, blogStoryActionCreator) => {
    var id = $route.current.params.id;
    return invokeAsync({
        action: blogStoryActionCreator.getById,
        params: { id: id }
    });
}])
export class BlogStoryEditorComponent {
    constructor(private $location, private $routeParams: angular.route.IRouteParamsService, private invokeAsync, private BlogStoryActionCreator: BlogStoryActionCreator) { }

    storeOnChange = state => {
        if (state.lastTriggeredByAction == RemoveBlogStoryAction && state.entities.filter(entity => entity.id === this.id).length < 1)
            this.$location.path(this.baseUrl + "/list");
        this.entities = state.blogStorys;
    };

    ngOnInit = () => {
        if (this.$routeParams["id"])
            angular.extend(this, angular.copy(this.entities.filter(entity => entity.id == this.$routeParams["id"])[0]));
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.BlogStoryActionCreator.addOrUpdate,
            params: {
                id: this.id,
                name: this.name,
                description: this.description,
                rating: this.rating,
                abstract: this.abstract
            }
        }).then(() => {
            if (!this.id && this.entities.filter(entity => entity.name === this.name).length > 0) {
                this.$location.path(this.baseUrl + "/edit/" + this.entities.filter(entity => entity.name === this.name)[0].id);
            }
            else {

            }
        });
    }

    remove = () => this.BlogStoryActionCreator.remove({ id: this.id });

    create = () => this.BlogStoryActionCreator.create();

    get baseUrl() { return "/BlogStory"; }

    id;
    name;
    rating;
    description;
    abstract;
    entities;

    static canActivate = () => {
        return ["$route", "invokeAsync", "BlogStoryActionCreator", ($route, invokeAsync, BlogStoryActionCreator) => {
            var id = $route.current.params.id;
            return invokeAsync({
                action: BlogStoryActionCreator.getById,
                params: { id: id }
            });
        }];
    }
}