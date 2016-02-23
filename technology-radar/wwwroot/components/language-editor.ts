import { AddLanguageAction } from "../actions";

export class LanguageEditorComponent {
    constructor(private invokeAsync, private languageActionCreator) { }

    storeOnChange = state=> {
        if (state.lastTriggeredByAction === AddLanguageAction) {
            this.id = null;
            this.name = null;
            this.rating = null;
            this.description = null;
            this.abstract = null;
        }
    }

    addOrUpdate = () => this.languageActionCreator.addOrUpdate({
        id: this.id,
        name: this.name,
        description: this.description,
        rating: this.rating,
        abstract: this.abstract
    });
            
    remove = () => this.languageActionCreator.remove({ id: this.id });

    id;
    name;
    rating;
    description;
    abstract;

}