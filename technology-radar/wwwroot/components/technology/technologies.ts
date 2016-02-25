export class TechnologiesComponent {
    constructor(private $route) { }

    storeOnChange = state => {
        switch (this.$route.current.$$route.originalPath) {
            case "/frameworks":
                this.entities = state.frameworks;
                this.title = "Frameworks";
                break;
            case "/languages":
                this.entities = state.languages;
                this.title = "Languages";
                break;
            case "/platforms":
                this.entities = state.platforms;
                this.title = "Platforms";
                break;
            case "/techniques":
                this.entities = state.techniques;
                this.title = "Techniques";
                break;
            case "/tools":
                this.entities = state.tools;
                this.title = "Tools";
                break;
        }
    };

    entities = [];
    title;

    static canActivate = () => [
        "$route", "invokeAsync",
        "frameworkActionCreator",
        "languageActionCreator",
        "platformActionCreator",
        "techniqueActionCreator",
        "toolActionCreator",
        ($route: any, invokeAsync,

            frameworkActionCreator,
            languageActionCreator,
            platformActionCreator,
            techniqueActionCreator,
            toolActionCreator) => {

            switch ($route.current.$$route.originalPath) {
                case "/frameworks":
                    return invokeAsync(frameworkActionCreator.all);
                    break;
                case "/languages":
                    return invokeAsync(languageActionCreator.all);
                    break;
                case "/platforms":
                    return invokeAsync(platformActionCreator.all);
                    break;
                case "/techniques":
                    return invokeAsync(techniqueActionCreator.all);
                    break;
                case "/tools":
                    return invokeAsync(toolActionCreator.all);
                    break;
            }

        }];
    
}