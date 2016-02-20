export class ToolEditorComponent {
    constructor(private toolActionCreator) { }

    storeOnChange = state => {
        this.id = null;
        this.name = null;
        this.rating = null;
        this.description;
    }

    addOrUpdate = () => this.toolActionCreator.addOrUpdate({ name: this.name });

    remove = () => this.toolActionCreator.remove({ id: this.id });

    id;
    name;
    rating;
    description;

}