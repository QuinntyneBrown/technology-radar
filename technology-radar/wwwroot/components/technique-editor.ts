export class TechniqueEditorComponent {
    constructor(private techniqueActionCreator) { }

    storeOnChange = state => {
        this.id = null;
        this.name = null;
        this.rating = null;
        this.description = null;
    }

    addOrUpdate = () => this.techniqueActionCreator.addOrUpdate({
        id: this.id,
        name: this.name,
        description: this.description,
        rating: this.rating
    });

    remove = () => this.techniqueActionCreator.remove({ id: this.id });

    id;
    name;
    rating;
    description;

}