export class SearchService {
    constructor(private $q, private apiEndpoint, private fetch) { }

    public query = (options) => {
        var deferred = this.$q.defer();        
        this.fetch.fromService({ method: "GET", url: this.baseUri + "/query", params: { term: options.term } }).then(function (results) {
            deferred.resolve(results.data);
        }).catch(function (error) {
            deferred.resolve(error);
        });
        return deferred.promise;
    }

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/search"; }
}
