import { TechniqueActionCreator, RemoveTechniqueAction } from "../../actions";
import { technologyType }  from "../technology/technology-type";
import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    route: "/technique/edit/:id",
    templateUrl: "wwwroot/components/technique/technique-editor.html",
    selector: "technique-editor",
    providers: ["$location", "$routeParams", "invokeAsync", "techniqueActionCreator"]
})
@CanActivate(["$route", "invokeAsync", "techniqueActionCreator", ($route: angular.route.IRouteService, invokeAsync, techniqueActionCreator: TechniqueActionCreator) => {
    var id = $route.current.params.id;
    return invokeAsync({
        action: techniqueActionCreator.getById,
        params: { id: id }
    });
}])
export class TechniqueEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private invokeAsync, private techniqueActionCreator: TechniqueActionCreator) { }

    storeOnChange = state => {
        if (state.lastTriggeredByAction == RemoveTechniqueAction && state.techniques.filter(entity => entity.id === this.id).length < 1)
            this.$location.path(this.baseUrl + "/list");
        this.entities = state.techniques;
    };

    ngOnInit = () => {
        if (this.$routeParams["id"])
            angular.extend(this, angular.copy(this.entities.filter(entity => entity.id == this.$routeParams["id"])[0]));
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.techniqueActionCreator.addOrUpdate,
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

    get baseUrl() { return "/technique"; }

    remove = () => this.techniqueActionCreator.remove({ id: this.id });

    create = () => this.techniqueActionCreator.create({ technologyType: technologyType.technique });

    entities;

    id;
    name;
    rating;
    description;
    abstract;

    static canActivate = () => {
        return ["$route", "invokeAsync", "techniqueActionCreator", ($route, invokeAsync, techniqueActionCreator) => {
            var id = $route.current.params.id;
            return invokeAsync({
                action: techniqueActionCreator.getById,
                params: { id: id }
            });
        }];
    }

}