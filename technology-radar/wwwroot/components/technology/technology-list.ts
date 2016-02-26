import { technologyType }  from "./technology-type";
import {
FrameworkActionCreator,
LanguageActionCreator,
PlatformActionCreator,
TechniqueActionCreator,
ToolActionCreator
} from "../../actions";

export class TechnologyListComponent {

    constructor(private $attrs: angular.IAttributes,
        private frameworkActionCreator: FrameworkActionCreator,
        private languageActionCreator: LanguageActionCreator,
        private platformActionCreator: PlatformActionCreator,
        private techniqueActionCreator: TechniqueActionCreator,
        private toolActionCreator: ToolActionCreator
    ) {
        
    }

    get title(): string {        
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

    get technologyActionCreator():FrameworkActionCreator | LanguageActionCreator | PlatformActionCreator | TechniqueActionCreator | ToolActionCreator {
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

    create = () => this.technologyActionCreator.create({ technologyType: this.technologyType });

    get technologyType() { return Number(this.$attrs["technologyType"]); }

}