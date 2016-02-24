import { technologyType }  from "./technology-type";

export class TechniqueListComponent {

    constructor(private techniqueActionCreator) { }

    storeOnChange = state => this.entities = state.techniques;

    entities;

    remove = entity => this.techniqueActionCreator.remove({ entity: entity });
    
    get technologyType() { return technologyType.technique; }

    static canActivate = () => [
        "techniqueActionCreator", "invokeAsync",
        (techniqueActionCreator, invokeAsync) => invokeAsync(techniqueActionCreator.all)
    ]
}