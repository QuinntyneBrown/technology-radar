import { SetCurrentTabAction } from "../actions";

export const setCurrentTabReducer = (state, action) => {
    if (action instanceof SetCurrentTabAction)
        state.tabIndex[action.tabName] = action.index;
        
    
    return state;
}