import { ToolActionCreator, RemoveToolAction } from "../../actions";
import { technologyType }  from "../technology/technology-type";
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
export class ToolEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private invokeAsync, private toolActionCreator: ToolActionCreator) { }

    storeOnChange = state => {
        if (state.lastTriggeredByAction == RemoveToolAction && state.tools.filter(entity => entity.id === this.id).length < 1)
            this.$location.path(this.baseUrl + "/list");
        this.entities = state.tools;
    };

    ngOnInit = () => {
        if (this.$routeParams["id"])
            angular.extend(this, angular.copy(this.entities.filter(entity => entity.id == this.$routeParams["id"])[0]));
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.toolActionCreator.addOrUpdate,
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
    
    get baseUrl() { return "/tool"; }
    
    remove = () => this.toolActionCreator.remove({ id: this.id });

    create = () => this.toolActionCreator.create({ technologyType: technologyType.tool });

    entities;

    id;
    name;
    rating;
    description;
    abstract;

    static canActivate = () => {
        return ["$route", "invokeAsync", "toolActionCreator", ($route, invokeAsync, toolActionCreator) => {
            var id = $route.current.params.id;
            return invokeAsync({
                action: toolActionCreator.getById,
                params: { id: id }
            });
        }];
    }
}