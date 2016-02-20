export class PlatformEditorComponent {
    constructor(private platformActionCreator) { }

    storeOnChange = state => {
        this.id = null;
        this.name = null;
        this.rating = null;
        this.description = null;
    }

    addOrUpdate = () => this.platformActionCreator.addOrUpdate({
        id: this.id,
        name: this.name,
        description: this.description,
        rating: this.rating
    });

    remove = () => this.platformActionCreator.remove({ id: this.id });

    id;
    name;
    rating;
    description;

}