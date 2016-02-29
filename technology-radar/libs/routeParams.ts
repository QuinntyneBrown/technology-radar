export class RouteParams {
    constructor(private $routeParams: angular.route.IRouteParamsService) { }
    get = id => { return this.$routeParams[id]; }
}