angular.module("fetch", ["localStorageManager"]).service("fetch", ["$http", "$q", "localStorageManager", (function () {
        function fetch($http, $q, localStorageManager) {
            var _this = this;
            this.$http = $http;
            this.$q = $q;
            this.localStorageManager = localStorageManager;
            this.fromService = function (options) {
                var deferred = _this.$q.defer();
                _this.$http({ method: options.method, url: options.url, data: options.data, params: options.params, headers: options.headers }).then(function (results) {
                    _this.localStorageManager.put({ name: _this.getCacheKey(options), value: results });
                    deferred.resolve(results);
                }).catch(function (error) {
                });
                return deferred.promise;
            };
            this.fromCacheOrService = function (options) {
                var deferred = _this.$q.defer();
                var cachedData = _this.localStorageManager.get({ name: _this.getCacheKey(options) });
                if (!cachedData) {
                    _this.fromService(options).then(function (results) {
                        deferred.resolve(results);
                    }).catch(function (error) {
                        deferred.reject(error);
                    });
                }
                else {
                    deferred.resolve(cachedData);
                }
                return deferred.promise;
            };
            this.getCacheKey = function (options) { return options.params ? options.url + JSON.stringify(options.params) : options.url; };
        }
        return fetch;
    })()]);
