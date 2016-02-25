import { technologyType }  from "../technology/technology-type";

export class FrameworkListComponent {
    constructor(private frameworkActionCreator) { }

    storeOnChange = state => this.entities = state.frameworks;

    entities;

    get technologyType() { return technologyType.framework; }

    remove = entity => this.frameworkActionCreator.remove({ entity: entity });
    
    static canActivate = () => [
        "frameworkActionCreator", "invokeAsync",
        (frameworkActionCreator, invokeAsync) => invokeAsync(frameworkActionCreator.all)
    ]
}