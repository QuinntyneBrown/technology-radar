export class SearchActionCreator {
    constructor(private dispatcher, private guid, private searchService) { }

    public query = options => {
        var newId = this.guid();
        this.searchService.query({ term: options.term })
            .then(results => this.dispatcher.dispatch(new SearchQueryAction(newId, options.term, results)));
        return newId;
    }
}

export class SearchQueryAction { constructor(public id, public term, public results) { } }