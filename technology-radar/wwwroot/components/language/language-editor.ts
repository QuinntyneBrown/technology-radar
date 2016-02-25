export class LanguageEditorComponent {
    constructor(private $routeParams: angular.route.IRouteParamsService, private invokeAsync, private languageActionCreator) {}

    storeOnChange = state => this.languages = state.languages;

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
            this.id = null;
            this.name = null;
            this.rating = null;
            this.description = null;
            this.abstract = null;
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