import { IDispatcher } from "../../libs/store";
import { TechnologyActionCreator } from "./technology-actions";
import { PlatformService } from "../services";

export class PlatformActionCreator extends TechnologyActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, private guid, private platformService: PlatformService) {
        super($location,dispatcher);
    }

    addOrUpdate = options => {
        var newId = this.guid();
        this.platformService.add({
            data: {
                id: options.id,
                abstract: options.abstract,
                name: options.name,
                description: options.description,
                rating: options.rating
            }
        }).then(results => {
            this.dispatcher.dispatch(new AddOrUpdatePlatformAction(newId, results));
        });
        return newId;
    }

    all = options => {
        var newId = this.guid();
        this.platformService.get().then(results => {
            this.dispatcher.dispatch(new AllPlatformsAction(newId, results));
        });
        return newId;
    }

    remove = options => {
        var newId = this.guid();
        this.platformService.remove({
            id: options.entity.id
        }).then(results => {
            this.dispatcher.dispatch(new RemovePlatformAction(newId, options.entity));
        });
        return newId;
    }
}


export class AddOrUpdatePlatformAction { constructor(public id, public entity) { } }

export class AllPlatformsAction { constructor(public id, public entities) { } }

export class RemovePlatformAction { constructor(public id, public entity) { } }

export class PlatformsFilterAction { constructor(public id, public term) { } }

export class SetCurrentPlatformAction { constructor(public id, public entityId) { } }