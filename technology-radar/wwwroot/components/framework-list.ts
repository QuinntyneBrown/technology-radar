export class FrameworkListComponent {
    constructor(private frameworkActionCreator) { }

    storeOnChange = state => this.entities = state.frameworks;

    entities;

    remove = entity => this.frameworkActionCreator.remove({ entity: entity });
    
    static canActivate = () => [
        "frameworkActionCreator", "invokeAsync",
        (frameworkActionCreator, invokeAsync) => invokeAsync(frameworkActionCreator.all)
    ]
}