import { AllPlatformsAction } from "../actions";
import { AddOrUpdatePlatformAction } from "../actions";
import { RemovePlatformAction } from "../actions";
import { pluckOut } from "../../libs";
import { addOrUpdate } from "../../libs";

export const addOrUpdatePlatformReducer = (state, action) => {
    if (action instanceof AddOrUpdatePlatformAction) {
        state.lastTriggeredByAction = AddOrUpdatePlatformAction;
        addOrUpdate({ items: state.platforms, item: action.entity });
    }
    return state;
}

export const removePlatformReducer = (state, action) => {
    if (action instanceof RemovePlatformAction) {
        state.lastTriggeredByAction = RemovePlatformAction;
        pluckOut({ items: state.platforms, value: action.entity.id });
    }        
    return state;
}

export const allPlatformsReducer = (state, action) => {
    if (action instanceof AllPlatformsAction) {
        state.platforms = action.entities;
    }
    return state;
}