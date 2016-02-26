import { IDispatcher } from "../../libs/store";
import { TechnologyActionCreator } from "./technology-actions";
import { ToolService } from "../services";


export class ToolActionCreator extends TechnologyActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, private guid, private toolService: ToolService) {
        super($location,dispatcher);
    }

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
            this.dispatcher.dispatch(new AddOrUpdateToolAction(newId, results));
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


export class AddOrUpdateToolAction { constructor(public id, public entity) { } }

export class AllToolsAction { constructor(public id, public entities) { } }

export class RemoveToolAction { constructor(public id, public entity) { } }

export class ToolsFilterAction { constructor(public id, public term) { } }

export class SetCurrentToolAction { constructor(public id, public entityId) { } }