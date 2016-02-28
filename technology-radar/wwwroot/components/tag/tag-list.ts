import { TagActionCreator } from "../../actions";

export class TagListComponent {

    constructor(private tagActionCreator: TagActionCreator) { }

    storeOnChange = state => this.entities = state.tags;

    entities;

    remove = entity => this.tagActionCreator.remove({ entity: entity });
    
    static canActivate = () => [
        "tagActionCreator", "invokeAsync",
        (tagActionCreator: TagActionCreator, invokeAsync) => invokeAsync(tagActionCreator.all)
        
    ]
}