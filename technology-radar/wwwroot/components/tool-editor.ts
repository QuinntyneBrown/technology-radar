export class ToolEditorComponent {
    constructor(private toolActionCreator) { }

    storeOnChange = state => {
        this.id = null;
        this.name = null;
        this.rating = null;
        this.description = null;
    }

    addOrUpdate = () => {
        this.toolActionCreator.addOrUpdate({
            id: this.id,
            name: this.name,
            description: this.description,
            rating: this.rating
        });
    }
    
    remove = () => this.toolActionCreator.remove({ id: this.id });

    id;
    name;
    rating;
    description;

}