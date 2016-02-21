import { IDispatcher } from "../../libs/store";


export class PlatformActionCreator {
    constructor(private dispatcher: IDispatcher, private guid, private platformService) { }

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
            this.dispatcher.dispatch(new AddPlatformAction(newId, results));
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


export class AddPlatformAction { constructor(public id, public entity) { } }

export class AllPlatformsAction { constructor(public id, public entities) { } }

export class RemovePlatformAction { constructor(public id, public entity) { } }

export class PlatformsFilterAction { constructor(public id, public term) { } }

export class SetCurrentPlatformAction { constructor(public id, public entityId) { } }