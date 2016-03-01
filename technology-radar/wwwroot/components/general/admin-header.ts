import { UserActionCreator } from "../../actions";
import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    templateUrl: "wwwroot/components/general/admin-header.html",
    selector: "admin-header",
    providers: ["userActionCreator"]
})
export class AdminHeaderComponent {
    constructor(private userActionCreator: UserActionCreator) { }    
    logOut = () => this.userActionCreator.logOut()
}