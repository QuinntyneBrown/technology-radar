import { technologyType }  from "./technology-type";
import * as actions from "../../actions";
import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    route: "/technology/list",
    templateUrl: "wwwroot/components/technology/technology-list.html",
    selector: "technology-list",
    providers: ["$attrs", "frameworkActionCreator", "languageActionCreator", "platformActionCreator", "techniqueActionCreator", "toolActionCreator"]
})
export class TechnologyListComponent {

    constructor(private $attrs: angular.IAttributes,
        private frameworkActionCreator: actions.FrameworkActionCreator,
        private languageActionCreator: actions.LanguageActionCreator,
        private platformActionCreator: actions.PlatformActionCreator,
        private techniqueActionCreator: actions.TechniqueActionCreator,
        private toolActionCreator: actions.ToolActionCreator
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

    get technologyActionCreator(): actions.FrameworkActionCreator | actions.LanguageActionCreator | actions.PlatformActionCreator | actions.TechniqueActionCreator | actions.ToolActionCreator {
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