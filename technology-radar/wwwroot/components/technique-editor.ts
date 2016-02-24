export class TechniqueEditorComponent {
    constructor(private invokeAsync, private techniqueActionCreator) { }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.techniqueActionCreator.addOrUpdate,
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

    remove = () => this.techniqueActionCreator.remove({ id: this.id });

    id;
    name;
    rating;
    description;
    abstract;

}