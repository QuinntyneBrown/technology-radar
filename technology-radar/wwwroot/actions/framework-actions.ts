import { IDispatcher } from "../../libs/store";
import { TechnologyActionCreator } from "./technology-actions";
import { FrameworkService } from "../services";


export class FrameworkActionCreator extends TechnologyActionCreator  {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, private frameworkService: FrameworkService, private guid) {
        super($location,dispatcher);
    }

    getById = options => {
        var newId = this.guid();
        this.frameworkService.getById({
            id: options.id
        }).then(results => {
            this.dispatcher.dispatch(new AddOrUpdateFrameworkAction(newId, results));
        });
        return newId;
    }

    addOrUpdate = options => {
        var newId = this.guid();
        this.frameworkService.add({
            data: {
                id: options.id,
                abstract: options.abstract,
                name: options.name,
                description: options.description,
                rating: options.rating
            }
        })
            .then(results => this.dispatcher.dispatch(new AddOrUpdateFrameworkAction(newId, results)));
        return newId;
    }

    all = options => {
        var newId = this.guid();
        this.frameworkService.get()
            .then(results => this.dispatcher.dispatch(new AllFrameworksAction(newId, results)));
        return newId;
    }
    
    remove = options => {
        var newId = this.guid();
        this.frameworkService.remove({ id: options.entity.id })
            .then(results => this.dispatcher.dispatch(new RemoveFrameworkAction(newId, options.entity)));
        return newId;
    }
}


export class AddOrUpdateFrameworkAction { constructor(public id, public entity) { } }

export class AllFrameworksAction { constructor(public id, public entities) { } }

export class RemoveFrameworkAction { constructor(public id, public entity) { } }

export class FrameworksFilterAction { constructor(public id, public term) { } }

export class SetCurrentFrameworkAction { constructor(public id, public entityId) { } }