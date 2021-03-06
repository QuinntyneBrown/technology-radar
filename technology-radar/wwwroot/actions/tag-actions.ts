﻿import { IDispatcher } from "../../libs/store";
import { TagService } from "../services";

export class TagActionCreator {
    constructor(private $location: angular.ILocationService, private dispatcher: IDispatcher, private guid, private tagService) { }

    addOrUpdate = options => {
        var newId = this.guid();
        this.tagService.add({
            data: {
                id: options.id,
                name: options.name,
                description: options.description
            }
        }).then(results => this.dispatcher.dispatch(new AddOrUpdateTagAction(newId, results)));
        return newId;
    }

    create = () => {
        this.dispatcher.dispatch(new SetCurrentTagAction(null));
        this.$location.path("/tag/list");
    }

    edit = (options) => {
        this.dispatcher.dispatch(new SetCurrentTagAction(options.entity));
        this.$location.path("/tag/edit/" + options.entity.id);
    }

    getById = options => {
        var newId = this.guid();
        this.tagService.getById({
            id: options.id
        }).then(results => this.dispatcher.dispatch(new AddOrUpdateTagAction(newId, results)));
        return newId;
    }

    all = options => {
        var newId = this.guid();
        this.tagService.get()
            .then(results => this.dispatcher.dispatch(new AllTagsAction(newId, results)));
        return newId;
    }

    remove = options => {
        var newId = this.guid();
        this.tagService.remove({ id: options.entity.id })
            .then(results => this.dispatcher.dispatch(new RemoveTagAction(newId, options.entity)));
        return newId;
    }
}

export class AddOrUpdateTagAction { constructor(public id, public entity) { } }
export class AllTagsAction { constructor(public id, public entities) { } }
export class RemoveTagAction { constructor(public id, public entity) { } }
export class TagsFilterAction { constructor(public id, public term) { } }
export class SetCurrentTagAction { constructor(public entity) { } }