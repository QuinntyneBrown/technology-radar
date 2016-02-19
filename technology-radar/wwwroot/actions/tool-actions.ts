﻿import { IDispatcher } from "../../libs/store";


export class ToolActionCreator {
    constructor(private dispatcher: IDispatcher, private toolService, private guid) { }

    addOrUpdate = options => {
        var newId = this.guid();
        this.toolService.add({
            data: {
                name: options.name
            }
        }).then(results => {
            this.dispatcher.dispatch(new AddToolAction(newId, results));
        });
        return newId;
    }

    all = options => {
        var newId = this.guid();
        this.toolService.get().then(results => {
            this.dispatcher.dispatch(new AllToolsAction(newId, results));
        });
        return newId;
    }

    remove = options => {
        var newId = this.guid();
        this.toolService.remove({
            id: options.Tool.id
        }).then(results => {
            this.dispatcher.dispatch(new RemoveToolAction(newId, options.Tool));
        });
        return newId;
    }
}


export class AddToolAction { constructor(public id, public entity) { } }

export class AllToolsAction { constructor(public id, public entities) { } }

export class RemoveToolAction { constructor(public id, public entity) { } }

export class ToolsFilterAction { constructor(public id, public term) { } }

export class SetCurrentToolAction { constructor(public id, public entityId) { } }