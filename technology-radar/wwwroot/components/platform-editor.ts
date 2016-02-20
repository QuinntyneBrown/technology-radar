export class PlatformEditorComponent {
    constructor(private platformActionCreator) { }

    storeOnChange = state => {
        this.id = null;
        this.name = null;
        this.rating = null;
        this.description;
    }

    addOrUpdate = () => this.platformActionCreator.addOrUpdate({ name: this.name });

    remove = () => this.platformActionCreator.remove({ id: this.id });

    id;
    name;
    rating;
    description;

}