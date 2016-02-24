import { technologyType }  from "./technology-type";

export class TechnologyListComponent {

    constructor(private $attrs: angular.IAttributes,
        private frameworkActionCreator,
        private languageActionCreator,
        private platformActionCreator,
        private techniqueActionCreator,
        private toolActionCreator
    ) {
        
    }

    get title() {
        
        switch (this.technologyType) {
            case technologyType.framework:
                return "Frameworks";
                break;

            case technologyType.language:
                return "Languages";
                break;

            case technologyType.platform:
                return "Platforms";
                break;

            case technologyType.technique:
                return "Techniques";
                break;

            case technologyType.tool:
                return "Tools";
                break;
        }
    }

    remove = entity => this.technologyActionCreator.remove({ entity: entity });

    edit = entity => this.technologyActionCreator.edit({ entity: entity });

    get technologyActionCreator() {
        switch (this.technologyType) {
            case technologyType.framework:
                return this.frameworkActionCreator;
                break;

            case technologyType.language:
                return this.languageActionCreator;
                break;

            case technologyType.platform:
                return this.platformActionCreator;
                break;

            case technologyType.technique:
                return this.techniqueActionCreator;
                break;

            case technologyType.tool:
                return this.toolActionCreator;
                break;
        }
    }

    get technologyType() { return Number(this.$attrs["technologyType"]); }

}