import { IDispatcher } from "../../libs/store";

export class YouTubeVideoActionCreator {
    constructor(private dispatcher: IDispatcher, private youTubeVideoService, private guid) { }

    addOrUpdate = options => {
        var newId = this.guid();
        this.youTubeVideoService.add({
            data: {
                id: options.id,
                abstract: options.abstract,
                name: options.name,
                description: options.description,
                rating: options.rating
            }
        })
            .then(results => this.dispatcher.dispatch(new AddYouTubeVideoAction(newId, results)));
        return newId;
    }

    all = options => {
        var newId = this.guid();
        this.youTubeVideoService.get()
            .then(results => this.dispatcher.dispatch(new AllYouTubeVideosAction(newId, results)));
        return newId;
    }

    remove = options => {
        var newId = this.guid();
        this.youTubeVideoService.remove({ id: options.entity.id })
            .then(results => this.dispatcher.dispatch(new RemoveYouTubeVideoAction(newId, options.entity)));
        return newId;
    }
}


export class AddYouTubeVideoAction { constructor(public id, public entity) { } }

export class AllYouTubeVideosAction { constructor(public id, public entities) { } }

export class RemoveYouTubeVideoAction { constructor(public id, public entity) { } }

export class YouTubeVideosFilterAction { constructor(public id, public term) { } }

export class SetCurrentYouTubeVideoAction { constructor(public id, public entityId) { } }