import { IDispatcher } from "../../libs/store";

export class ArticleActionCreator {
    constructor(private articleService, private dispatcher: IDispatcher, private guid) { }

    addOrUpdate = options => {
        var newId = this.guid();
        this.articleService.add({
            data: {
                id: options.id,
                abstract: options.abstract,
                name: options.name,
                description: options.description,
                rating: options.rating
            }
        })
            .then(results => this.dispatcher.dispatch(new AddArticleAction(newId, results)));
        return newId;
    }

    all = options => {
        var newId = this.guid();
        this.articleService.get()
            .then(results => this.dispatcher.dispatch(new AllArticlesAction(newId, results)));
        return newId;
    }

    remove = options => {
        var newId = this.guid();
        this.articleService.remove({ id: options.entity.id })
            .then(results => this.dispatcher.dispatch(new RemoveArticleAction(newId, options.entity)));
        return newId;
    }
}


export class AddArticleAction { constructor(public id, public entity) { } }

export class AllArticlesAction { constructor(public id, public entities) { } }

export class RemoveArticleAction { constructor(public id, public entity) { } }

export class ArticlesFilterAction { constructor(public id, public term) { } }

export class SetCurrentArticleAction { constructor(public id, public entityId) { } }