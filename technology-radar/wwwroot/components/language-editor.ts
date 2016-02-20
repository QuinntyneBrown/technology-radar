export class LanguageEditorComponent {
    constructor(private languageActionCreator) { }

    storeOnChange = state => {
        this.id = null;
        this.name = null;
        this.rating = null;
        this.description;
    }

    addOrUpdate = () => this.languageActionCreator.addOrUpdate({ name: this.name });

    remove = () => this.languageActionCreator.remove({ id: this.id });

    id;
    name;
    rating;
    description;

}