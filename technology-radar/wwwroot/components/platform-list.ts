export class PlatformListComponent {
    constructor(private platformActionCreator) { }

    storeOnChange = state => this.entities = state.platforms;

    entities;

    remove = entity => this.platformActionCreator.remove({ entity: entity });
    
    static canActivate = () => [
        "platformActionCreator", "invokeAsync",
        (platformActionCreator, invokeAsync) => invokeAsync(platformActionCreator.all)
    ]
}