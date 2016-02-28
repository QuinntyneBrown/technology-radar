import { TagActionCreator } from "../../actions";
import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    route: "/tag/list",
    templateUrl: "wwwroot/components/tag/tag-list.html",
    selector: "language-editor",
    providers: ["tagActionCreator"]
})
@CanActivate([
    "tagActionCreator", "invokeAsync",
    (tagActionCreator: TagActionCreator, invokeAsync) => invokeAsync(tagActionCreator.all)

])
export class TagListComponent {
    constructor(private tagActionCreator: TagActionCreator) { }
    storeOnChange = state => this.entities = state.tags;
    entities;
    remove = entity => this.tagActionCreator.remove({ entity: entity });   
}