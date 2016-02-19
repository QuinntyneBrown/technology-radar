﻿import { IDispatcher } from "../../libs/store";


export class LanguageActionCreator {
    constructor(private dispatcher: IDispatcher, private languageService, private guid) { }

    addOrUpdate = options => {
        var newId = this.guid();
        this.languageService.add({
            data: {
                name: options.name
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
            id: options.Language.id
        }).then(results => {
            this.dispatcher.dispatch(new RemoveLanguageAction(newId, options.Language));
        });
        return newId;
    }
}


export class AddLanguageAction { constructor(public id, public entity) { } }

export class AllLanguagesAction { constructor(public id, public entities) { } }

export class RemoveLanguageAction { constructor(public id, public entity) { } }

export class LanguagesFilterAction { constructor(public id, public term) { } }

export class SetCurrentLanguageAction { constructor(public id, public entityId) { } }