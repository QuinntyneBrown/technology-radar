import { UserActionCreator } from "../../actions";

export class AdminHeaderComponent {
    constructor(private userActionCreator: UserActionCreator) { }
    
    logOut = () => this.userActionCreator.logOut()
}