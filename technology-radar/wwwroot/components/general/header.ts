import { UserActionCreator } from "../../actions";
import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    templateUrl: "wwwroot/components/general/header.html",
    selector: "app-header",
    providers: ["$rootScope","$route","userActionCreator"]
})
export class HeaderComponent {
    constructor(private $rootScope, private $route, private userActionCreator: UserActionCreator) {
        $rootScope.$on("$viewContentLoaded", () => { this.currentPath = $route.current.$$route.originalPath; });
    }
    storeOnChange = state => this.token = state.token;
    isLoggedIn = () => this.token != null;
    logOut = () => this.userActionCreator.logOut();
    token;
    currentPath = null;
}