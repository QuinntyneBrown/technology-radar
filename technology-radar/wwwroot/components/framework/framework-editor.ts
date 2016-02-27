import { FrameworkActionCreator, RemoveFrameworkAction } from "../../actions";
import { technologyType }  from "../technology/technology-type";

export class FrameworkEditorComponent {
    constructor(private $location, private $routeParams: angular.route.IRouteParamsService, private invokeAsync, private frameworkActionCreator: FrameworkActionCreator) { }
    
    storeOnChange = state => {
        if (state.lastTriggeredByAction == RemoveFrameworkAction && state.frameworks.filter(entity => entity.id === this.id).length < 1)
            this.$location.path(this.baseUrl + "/list");
        this.entities = state.frameworks;
    };

    ngOnInit = () => {
        if (this.$routeParams["id"])
            angular.extend(this, angular.copy(this.entities.filter(entity => entity.id == this.$routeParams["id"])[0]));
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.frameworkActionCreator.addOrUpdate,
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

    remove = () => this.frameworkActionCreator.remove({ id: this.id });

    create = () => this.frameworkActionCreator.create({ technologyType: technologyType.framework });

    get baseUrl() { return "/framework"; }

    id;
    name;
    rating;
    description;
    abstract;
    entities;

    static canActivate = () => {
        return ["$route", "invokeAsync", "frameworkActionCreator", ($route, invokeAsync, frameworkActionCreator) => {
            var id = $route.current.params.id;
            return invokeAsync({
                action: frameworkActionCreator.getById,
                params: { id: id }
            });
        }];
    }
}