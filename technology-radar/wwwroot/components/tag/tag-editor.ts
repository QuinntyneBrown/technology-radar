import { TagActionCreator, RemoveTagAction } from "../../actions";
import { technologyType }  from "../technology/technology-type";


export class TagEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private invokeAsync, private tagActionCreator: TagActionCreator) { }

    storeOnChange = state => {
        if (state.lastTriggeredByAction == RemoveTagAction && this.entities.filter(entity => entity.id === this.id).length < 1)
            this.$location.path(this.baseUrl + "/list");
        this.entities = state.tags;
    };

    ngOnInit = () => {
        if (this.$routeParams["id"])
            angular.extend(this, angular.copy(this.entities.filter(entity => entity.id == this.$routeParams["id"])[0]));
    }

    addOrUpdate = () => {
        alert("?");
        this.invokeAsync({
            action: this.tagActionCreator.addOrUpdate,
            params: {
                id: this.id,
                name: this.name,
                description: this.description,
            }
        }).then(() => {
            if (!this.id && this.entities.filter(entity => entity.name === this.name).length > 0) {
                this.$location.path(this.baseUrl + "/edit/" + this.entities.filter(entity => entity.name === this.name)[0].id);
            }
            else {

            }
        });
    }

    get baseUrl() { return "/tag"; }

    remove = () => this.tagActionCreator.remove({ id: this.id });

    create = () => this.tagActionCreator.create();

    entities;

    id;
    name;
    rating;
    description;
    abstract;

    static canActivate = () => {
        return ["$route", "invokeAsync", "tagActionCreator", ($route, invokeAsync, tagActionCreator) => {
            var id = $route.current.params.id;
            return invokeAsync({
                action: tagActionCreator.getById,
                params: { id: id }
            });
        }];
    }
}