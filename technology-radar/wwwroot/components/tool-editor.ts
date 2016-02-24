export class ToolEditorComponent {
    constructor(private invokeAsync, private toolActionCreator) { }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.toolActionCreator.addOrUpdate,
            params: {
                id: this.id,
                name: this.name,
                description: this.description,
                rating: this.rating,
                abstract: this.abstract
            }
        }).then(() => {
            this.id = null;
            this.name = null;
            this.rating = null;
            this.description = null;
            this.abstract = null;
        });
    } 
    
    remove = () => this.toolActionCreator.remove({ id: this.id });

    id;
    name;
    rating;
    description;
    abstract;

}