import { IDispatcher } from "../../libs/store";


export class ToolActionCreator {
    constructor(private dispatcher: IDispatcher, private guid, private toolService) { }

    addOrUpdate = options => {
        var newId = this.guid();
        this.toolService.add({
            data: {
                id: options.id,
                abstract: options.abstract,
                name: options.name,
                description: options.description,
                rating: options.rating
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
            id: options.entity.id
        }).then(results => {
            this.dispatcher.dispatch(new RemoveToolAction(newId, options.entity));
        });
        return newId;
    }
}


export class AddToolAction { constructor(public id, public entity) { } }

export class AllToolsAction { constructor(public id, public entities) { } }

export class RemoveToolAction { constructor(public id, public entity) { } }

export class ToolsFilterAction { constructor(public id, public term) { } }

export class SetCurrentToolAction { constructor(public id, public entityId) { } }