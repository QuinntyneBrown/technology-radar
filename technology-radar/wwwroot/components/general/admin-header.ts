import { UserActionCreator } from "../../actions";
import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    templateUrl: "wwwroot/components/general/app.html",
    selector: "app",
    providers: ["userActionCreator"]
})
export class AdminHeaderComponent {
    constructor(private userActionCreator: UserActionCreator) { }    
    logOut = () => this.userActionCreator.logOut()
}