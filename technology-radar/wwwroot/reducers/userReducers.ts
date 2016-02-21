import { UserLoggedInAction, UserLoggedOutAction } from "../actions";

export const userLoggedInReducer = (state, action) => {
    if (action instanceof UserLoggedInAction) {
        state.token = action.userData.access_token;
    }    
    return state;
}

export const userLoggedOutReducer = (state, action) => {
    if (action instanceof UserLoggedOutAction)
        state.token = null;    
    return state;
}
