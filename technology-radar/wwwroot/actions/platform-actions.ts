import { IDispatcher } from "../../libs/store";


export class PlatformActionCreator {
    constructor(private dispatcher: IDispatcher, private platformService, private guid) { }

    addOrUpdate = options => {
        var newId = this.guid();
        this.platformService.add({
            data: {
                name: options.name
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
            id: options.Platform.id
        }).then(results => {
            this.dispatcher.dispatch(new RemovePlatformAction(newId, options.Platform));
        });
        return newId;
    }
}


export class AddPlatformAction { constructor(public id, public entity) { } }

export class AllPlatformsAction { constructor(public id, public entities) { } }

export class RemovePlatformAction { constructor(public id, public entity) { } }

export class PlatformsFilterAction { constructor(public id, public term) { } }

export class SetCurrentPlatformAction { constructor(public id, public entityId) { } }