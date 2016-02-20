export class LanguageEditorComponent {
    constructor(private languageActionCreator) { }

    storeOnChange = state => {
        this.id = null;
        this.name = null;
        this.rating = null;
        this.description = null;
    }

    addOrUpdate = () => this.languageActionCreator.addOrUpdate({
        id: this.id,
        name: this.name,
        description: this.description,
        rating: this.rating
    });

    remove = () => this.languageActionCreator.remove({ id: this.id });

    id;
    name;
    rating;
    description;

}