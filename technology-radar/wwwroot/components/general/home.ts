import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    templateUrl: "wwwroot/components/general/header.html",
    selector: "home",
    providers: ["$location"]
})
export class HomeComponent { constructor(private $location) { } }