export class FrameworkEditorComponent {
    constructor(private invokeAsync, private frameworkActionCreator) { }
    
    addOrUpdate = () => {
        this.invokeAsync({
            action: this.frameworkActionCreator.addOrUpdate,
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

    remove = () => this.frameworkActionCreator.remove({ id: this.id });

    id;
    name;
    rating;
    description;
    abstract;

    //static canActivate = () => {
    //    return ["$route", "invokeAsync", "frameworkActionCreator", ($route, invokeAsync, frameworkActionCreator) => {

    //    }];
    //}
}