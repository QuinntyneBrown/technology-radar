import { IDispatcher } from "../../libs/store";
import { UserService } from "../services";

export class UserActionCreator {
    constructor(private dispatcher: IDispatcher, private guid, private userService: UserService) {}

    tryToLogin = options => {
        var newId = this.guid();
        this.userService.tryToLogin({
            data: {
                username: options.username,
                password: options.password
            }
        }).then(results => {
            this.dispatcher.dispatch(new UserLoggedInAction(newId, results));
        });
        return newId;
    }

    logOut = () => {
        var newId = this.guid();
        this.dispatcher.dispatch(new UserLoggedOutAction(newId));
        return newId;
    } 
}

export class AddUserAction { constructor(public entity) { } }

export class AllUsersAction { constructor(public entities) { } }

export class RemoveUserAction { constructor(public id) { } }

export class UsersFilterAction { constructor(public term) { } }

export class UserLoggedInAction { constructor(public id, public userData) { } }

export class UserLoggedOutAction { constructor(public id) { } }

