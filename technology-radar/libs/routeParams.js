var RouteParams = (function () {
    function RouteParams($routeParams) {
        var _this = this;
        this.$routeParams = $routeParams;
        this.get = function (id) { return _this.$routeParams[id]; };
    }
    return RouteParams;
})();
exports.RouteParams = RouteParams;
