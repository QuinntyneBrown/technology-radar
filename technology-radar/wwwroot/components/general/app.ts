import { UserActionCreator } from "../../actions";

export class AppComponent {
    constructor(private userActionCreator: UserActionCreator) { }
    storeOnChange = state => this.token = state.token;
    isLoggedIn = () => this.token != null;
    logOut = () => this.userActionCreator.logOut();
    token;
}