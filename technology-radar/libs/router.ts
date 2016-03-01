export class RouterProvider {
    constructor(private $location: angular.ILocationService) { }
    
    configure = () => {

    }

    routeDictionary;

    navigate = (options:Array<any>) => { this.$location.path(this.routeDictionary[options[0]]) }

    $get = () => this;
}