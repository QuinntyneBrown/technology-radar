import { IDispatcher } from "../../libs/store";
import { BlogStoryService } from "../services";

export class BlogStoryActionCreator {
    constructor(private $location: angular.ILocationService, private blogStoryService: BlogStoryService, private dispatcher: IDispatcher, private guid) {

    }

    create = () => {
        this.dispatcher.dispatch(new SetCurrentBlogStoryAction(null));
        this.$location.path("/blogstory/list");
    }

    edit = (options) => {
        this.dispatcher.dispatch(new SetCurrentBlogStoryAction(options.entity));
        this.$location.path("/blogstory/edit/" + options.entity.id);
    }

    getById = options => {
        var newId = this.guid();
        this.blogStoryService.getById({
            id: options.id
        }).then(results => {
            this.dispatcher.dispatch(new AddOrUpdateBlogStoryAction(newId, results));
        });
        return newId;
    }

    addOrUpdate = options => {
        var newId = this.guid();
        this.blogStoryService.add({
            data: {
                id: options.id,
                abstract: options.abstract,
                name: options.name,
                description: options.description,
            }
        }).then(results => {
            this.dispatcher.dispatch(new AddOrUpdateBlogStoryAction(newId, results));
        });
        return newId;
    }

    all = options => {
        var newId = this.guid();
        this.blogStoryService.get().then(results => {
            this.dispatcher.dispatch(new AllBlogStorysAction(newId, results));
        });
        return newId;
    }

    remove = options => {
        var newId = this.guid();
        this.blogStoryService.remove({
            id: options.entity.id
        }).then(results => {
            this.dispatcher.dispatch(new RemoveBlogStoryAction(newId, options.entity));
        });
        return newId;
    }
}

export class AddOrUpdateBlogStoryAction { constructor(public id, public entity) { } }

export class AllBlogStorysAction { constructor(public id, public entities) { } }

export class RemoveBlogStoryAction { constructor(public id, public entity) { } }

export class BlogStorysFilterAction { constructor(public id, public term) { } }

export class SetCurrentBlogStoryAction { constructor(public entity) { } }