import { UserActionCreator } from "../../actions";
import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    templateUrl: "wwwroot/components/general/app.html",
    selector: "app",
    providers: ["userActionCreator"]
})
export class AppComponent {
    constructor(private userActionCreator: UserActionCreator) { }
    storeOnChange = state => this.token = state.token;
    isLoggedIn = () => this.token != null;
    logOut = () => this.userActionCreator.logOut();
    token;
}