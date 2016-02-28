import { technologyType }  from "../technology/technology-type";
import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    route: "/technqiue/list",
    templateUrl: "wwwroot/components/technqiue/technqiue-list.html",
    selector: "technqiue-list",
    providers: ["technqiueActionCreator"]
})
@CanActivate([
    "techniqueActionCreator", "invokeAsync",
    (techniqueActionCreator, invokeAsync) => invokeAsync(techniqueActionCreator.all)
])
export class TechniqueListComponent {
    constructor(private techniqueActionCreator) { }
    storeOnChange = state => this.entities = state.techniques;
    entities;    
    get technologyType() { return technologyType.technique; }    
}