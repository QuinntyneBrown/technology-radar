import { IDispatcher } from "../../libs/store";


export class LanguageActionCreator {
    constructor(private dispatcher: IDispatcher, private guid, private languageService) { }

    addOrUpdate = options => {
        var newId = this.guid();
        this.languageService.add({
            data: {
                id: options.id,
                name: options.name,
                description: options.description,
                rating: options.rating
            }
        }).then(results => {
            this.dispatcher.dispatch(new AddLanguageAction(newId, results));
        });
        return newId;
    }

    all = options => {
        var newId = this.guid();
        this.languageService.get().then(results => {
            this.dispatcher.dispatch(new AllLanguagesAction(newId, results));
        });
        return newId;
    }

    remove = options => {
        var newId = this.guid();
        this.languageService.remove({
            id: options.entity.id
        }).then(results => {
            this.dispatcher.dispatch(new RemoveLanguageAction(newId, options.entity));
        });
        return newId;
    }
}


export class AddLanguageAction { constructor(public id, public entity) { } }

export class AllLanguagesAction { constructor(public id, public entities) { } }

export class RemoveLanguageAction { constructor(public id, public entity) { } }

export class LanguagesFilterAction { constructor(public id, public term) { } }

export class SetCurrentLanguageAction { constructor(public id, public entityId) { } }