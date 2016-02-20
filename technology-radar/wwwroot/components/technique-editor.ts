export class TechniqueEditorComponent {
    constructor(private techniqueActionCreator) { }

    storeOnChange = state => {
        this.id = null;
        this.name = null;
        this.rating = null;
        this.description;
    }

    addOrUpdate = () => this.techniqueActionCreator.addOrUpdate({ name: this.name });

    remove = () => this.techniqueActionCreator.remove({ id: this.id });

    id;
    name;
    rating;
    description;

}