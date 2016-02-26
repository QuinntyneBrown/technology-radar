import { LanguageActionCreator, RemoveLanguageAction } from "../../actions";

export class LanguageEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private invokeAsync, private languageActionCreator: LanguageActionCreator) {}

    storeOnChange = state => {
        if (state.lastTriggeredByAction == RemoveLanguageAction && this.languages.filter(lanaguage => lanaguage.id === this.id).length < 1)
            this.$location.path("/language/list");
        this.languages = state.languages;
    };

    ngOnInit = () => {
        if (this.$routeParams["id"])
            for (var i = 0; i < this.languages.length; i++) {
                if (this.languages[i].id == this.$routeParams["id"]) {
                    var language = angular.copy(this.languages[i]);
                    angular.extend(this, language);
                }
            }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.languageActionCreator.addOrUpdate,
            params: {
                id: this.id,
                name: this.name,
                description: this.description,
                rating: this.rating,
                abstract: this.abstract
            }
        }).then(() => {
            if (!this.id && this.languages.filter(lanaguage => lanaguage.name === this.name).length > 0) {
                this.$location.path("/language/edit/" + this.languages.filter(lanaguage => lanaguage.name === this.name)[0].id);
            }
            else {
                
            }
        });
    } 
            

    id;
    name;
    rating;
    description;
    abstract;
    languages;

    static canActivate = () => {
        return ["$route", "invokeAsync", "languageActionCreator", ($route, invokeAsync, languageActionCreator) => {
            var id = $route.current.params.id;
            return invokeAsync({
                action: languageActionCreator.getById,
                params: { id: id }
            });
        }];
    }



}