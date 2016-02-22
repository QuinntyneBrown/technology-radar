import { SetCurrentTabAction } from "../actions";

export const setCurrentTabReducer = (state, action) => {
    if (action instanceof SetCurrentTabAction)        
        state[action.tabName + "-tab-index"] = action.index;
    
    return state;
}