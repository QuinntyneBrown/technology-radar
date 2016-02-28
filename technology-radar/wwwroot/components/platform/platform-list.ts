import { technologyType }  from "../technology/technology-type";
import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    route: "/platform/list",
    templateUrl: "wwwroot/components/platform/platform-list.html",
    selector: "platform-list",
    providers: ["platformActionCreator"]
})
@CanActivate([
    "platformActionCreator", "invokeAsync",
    (platformActionCreator, invokeAsync) => invokeAsync(platformActionCreator.all)
])
export class PlatformListComponent {
    constructor(private platformActionCreator) { }
    storeOnChange = state => this.entities = state.platforms;
    entities;    
    get technologyType() { return technologyType.platform; }
}