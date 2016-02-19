export class ToolListComponent {
    constructor(private toolActionCreator) { }

    storeOnChange = state => this.entities = state.tools;

    entities;

    remove = entity => this.toolActionCreator.remove({ entity: entity });
    
    static canActivate = () => [
        "toolActionCreator", "invokeAsync",
        (toolActionCreator, invokeAsync) => invokeAsync(toolActionCreator.all)
    ]
}