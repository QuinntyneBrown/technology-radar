export class TechniqueListComponent {

    constructor(private techniqueActionCreator) { }

    storeOnChange = state => this.entities = state.techniques;

    entities;

    remove = entity => this.techniqueActionCreator.remove({ entity: entity });


    static canActivate = () => [
        "techniqueActionCreator", "invokeAsync",
        (techniqueActionCreator, invokeAsync) => invokeAsync(techniqueActionCreator.all)
    ]
}