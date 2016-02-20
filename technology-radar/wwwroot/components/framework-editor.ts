export class FrameworkEditorComponent {
    constructor(private frameworkActionCreator) { }

    storeOnChange = state => {
        this.id = null;
        this.name = null;
        this.rating = null;
        this.description;
    }

    addOrUpdate = () => this.frameworkActionCreator.addOrUpdate({ name: this.name });

    remove = () => this.frameworkActionCreator.remove({ id: this.id });

    id;
    name;
    rating;
    description;

}