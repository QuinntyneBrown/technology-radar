import { PlatformActionCreator, RemovePlatformAction } from "../../actions";
import { technologyType }  from "../technology/technology-type";

export class PlatformEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private invokeAsync, private platformActionCreator: PlatformActionCreator) { }

    storeOnChange = state => {
        if (state.lastTriggeredByAction == RemovePlatformAction && state.platforms.filter(entity => entity.id === this.id).length < 1)
            this.$location.path(this.baseUrl + "/list");
        this.entities = state.platforms;
    };

    ngOnInit = () => {
        if (this.$routeParams["id"])
            angular.extend(this, angular.copy(this.entities.filter(entity => entity.id == this.$routeParams["id"])[0]));
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.platformActionCreator.addOrUpdate,
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

    get baseUrl() { return "/platform"; }

    remove = () => this.platformActionCreator.remove({ id: this.id });

    create = () => this.platformActionCreator.create({ technologyType: technologyType.platform });

    entities;

    id;
    name;
    rating;
    description;
    abstract;

    static canActivate = () => {
        return ["$route", "invokeAsync", "platformActionCreator", ($route, invokeAsync, platformActionCreator) => {
            var id = $route.current.params.id;
            return invokeAsync({
                action: platformActionCreator.getById,
                params: { id: id }
            });
        }];
    }
}