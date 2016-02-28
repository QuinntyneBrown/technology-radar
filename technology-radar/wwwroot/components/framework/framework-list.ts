import { technologyType }  from "../technology/technology-type";
import { FrameworkActionCreator } from "../../actions";
import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    route: "/framework/list",
    templateUrl: "wwwroot/components/language/language-editor.html",
    selector: "language-editor",
    providers: ["$location", "$routeParams", "invokeAsync", "languageActionCreator"]
})
@CanActivate([
    "frameworkActionCreator", "invokeAsync",
    (frameworkActionCreator, invokeAsync) => invokeAsync(frameworkActionCreator.all)
])
export class FrameworkListComponent {
    constructor(private frameworkActionCreator: FrameworkActionCreator) { }

    storeOnChange = state => this.entities = state.frameworks;

    entities;

    get technologyType() { return technologyType.framework; }

    remove = entity => this.frameworkActionCreator.remove({ entity: entity });
    
}