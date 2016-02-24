import { technologyType }  from "./technology-type";

export class PlatformListComponent {
    constructor(private platformActionCreator) { }

    storeOnChange = state => this.entities = state.platforms;

    entities;

    remove = entity => this.platformActionCreator.remove({ entity: entity });
    
    get technologyType() { return technologyType.platform; }

    static canActivate = () => [
        "platformActionCreator", "invokeAsync",
        (platformActionCreator, invokeAsync) => invokeAsync(platformActionCreator.all)
    ]
}