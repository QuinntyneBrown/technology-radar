var RouterProvider = (function () {
    function RouterProvider($location) {
        var _this = this;
        this.$location = $location;
        this.configure = function () {
        };
        this.navigate = function (options) { _this.$location.path(_this.routeDictionary[options[0]]); };
        this.$get = function () { return _this; };
    }
    return RouterProvider;
})();
exports.RouterProvider = RouterProvider;
