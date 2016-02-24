﻿export class FrameworkService {
    constructor(private $q: angular.IQService, private apiEndpoint, private fetch) { }
    
    get() {
        let deferred = this.$q.defer();
        this.fetch.fromCacheOrService({ method: "GET", url: this.baseUri + "/get" })
            .then(results => deferred.resolve(results.data));
        return deferred.promise;
    };

    getById(options) {
        let deferred = this.$q.defer();
        this.fetch.fromCacheOrService({ method: "GET", url: this.baseUri + "/getById", params: { id: options.id } })
            .then(results => deferred.resolve(results.data));
        return deferred.promise;
    };

    add(options) {
        let deferred = this.$q.defer();
        this.fetch.fromService({ method: "POST", url: this.baseUri + "/add", data: options.data })
            .then(results => deferred.resolve(results.data));
        return deferred.promise;
    };

    update(options) {
        let deferred = this.$q.defer();
        this.fetch.fromService({ method: "PUT", url: this.baseUri + "/update", data: options.data })
            .then(results => deferred.resolve(results.data));
        return deferred.promise;
    };

    remove(options) {
        let deferred = this.$q.defer();
        this.fetch.fromService({ method: "DELETE", url: this.baseUri + "/remove", params: { id: options.id } })
            .then(results => deferred.resolve(results.data));
        return deferred.promise;
    };

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/framework"; }

}