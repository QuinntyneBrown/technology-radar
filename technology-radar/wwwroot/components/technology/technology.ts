export class TechnologyComponent {
    constructor(private $routeParams: angular.route.IRouteParamsService) { }

    storeOnChange = state => this.state = state;
    
    get entity() {
        var entites = [];

        if (this.state)
            switch (this.$routeParams["technology"]) {
                case "framework":
                    entites = this.state.frameworks;
                    break;
                case "language":
                    entites = this.state.languages;;
                    break;
                case "platform":
                    entites = this.state.platforms;
                    break;
                case "technique":
                    entites = this.state.techniques;
                    break;
                case "tool":
                    entites = this.state.tools;
                    break;
            }            

        return entites.filter(entity => entity.id == this.$routeParams["id"])[0];
    }

    state;

    static canActivate = () => {
        return ["$route",
            "invokeAsync",
            "frameworkActionCreator",
            "languageActionCreator",
            "platformActionCreator",
            "techniqueActionCreator",
            "toolActionCreator", (
            $route,
            invokeAsync,
            frameworkActionCreator,
            languageActionCreator,
            platformActionCreator,
            techniqueActionCreator,
            toolActionCreator
        ) => {
            var technologyActionCreator;
            var id = $route.current.params.id;

            switch ($route.current.params.technology) {
                case "framework":
                    technologyActionCreator = frameworkActionCreator;
                    break;
                case "language":
                    technologyActionCreator = languageActionCreator;
                    break;
                case "platform":
                    technologyActionCreator = platformActionCreator;
                    break;
                case "technique":
                    technologyActionCreator = techniqueActionCreator;
                    break;
                case "tool":
                    technologyActionCreator = toolActionCreator;
                    break;
            }
            return invokeAsync({
                action: technologyActionCreator.getById,
                params: { id: id }
            })
        }];
    }
}