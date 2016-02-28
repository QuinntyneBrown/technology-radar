import { technologyType }  from "../technology/technology-type";
import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    route: "/tool/list",
    templateUrl: "wwwroot/components/tool/tool-list.html",
    selector: "tool-list",
    providers: ["toolActionCreator"]
})
@CanActivate([
    "toolActionCreator", "invokeAsync",
    (toolActionCreator, invokeAsync) => invokeAsync(toolActionCreator.all)
])
export class ToolListComponent {
    constructor(private toolActionCreator) { }

    storeOnChange = state => this.entities = state.tools;

    entities;

    remove = entity => this.toolActionCreator.remove({ entity: entity });
    
    get technologyType() { return technologyType.tool; }
    
}