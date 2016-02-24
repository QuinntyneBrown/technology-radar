import { IDispatcher } from "../../libs/store";
import { TechnologyActionCreator } from "./technology-actions";

export class LanguageActionCreator extends TechnologyActionCreator {
    constructor($location: angular.ILocationService, private dispatcher: IDispatcher, private guid, private languageService) {
        super($location);
    }

    getById = options => {
        var newId = this.guid();
        this.languageService.getById({
            id: options.id
        }).then(results => {
            this.dispatcher.dispatch(new LanguageByIdAction(newId, results));
        });
        return newId;
    }

    addOrUpdate = options => {
        var newId = this.guid();
        this.languageService.add({
            data: {
                id: options.id,
                abstract: options.abstract,
                name: options.name,
                description: options.description,
                rating: options.rating
            }
        }).then(results => {
            this.dispatcher.dispatch(new AddOrUpdateLanguageAction(newId, results));
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

export class LanguageByIdAction { constructor(public id, public entity) { } }

export class AddOrUpdateLanguageAction { constructor(public id, public entity) { } }

export class AllLanguagesAction { constructor(public id, public entities) { } }

export class RemoveLanguageAction { constructor(public id, public entity) { } }

export class LanguagesFilterAction { constructor(public id, public term) { } }

export class SetCurrentLanguageAction { constructor(public id, public entityId) { } }