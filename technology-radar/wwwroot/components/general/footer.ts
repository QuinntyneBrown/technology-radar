import { UserActionCreator } from "../../actions";
import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    templateUrl: "wwwroot/components/general/footer.html",
    selector: "app-footer",
    providers: ["userActionCreator"]
})
export class FooterComponent {
    constructor(private userActionCreator: UserActionCreator) { }
    storeOnChange = state => this.token = state.token;
    isLoggedIn = () => this.token != null;
    logOut = () => this.userActionCreator.logOut();
    token;
}