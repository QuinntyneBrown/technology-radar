export class FrameworkEditorComponent {
    constructor(private frameworkActionCreator) { }

    storeOnChange = state => {
        this.id = null;
        this.name = null;
        this.rating = null;
        this.description = null;
    }

    addOrUpdate = () => this.frameworkActionCreator.addOrUpdate({
        id: this.id,
        name: this.name,
        description: this.description,
        rating: this.rating
    });

    remove = () => this.frameworkActionCreator.remove({ id: this.id });

    id;
    name;
    rating;
    description;

}