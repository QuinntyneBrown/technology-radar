import { AllPlatformsAction } from "../actions";
import { AddPlatformAction } from "../actions";
import { RemovePlatformAction } from "../actions";
import { pluckOut } from "../../libs";
import { addOrUpdate } from "../../libs";

export const addPlatformReducer = (state, action) => {
    if (action instanceof AddPlatformAction) {
        addOrUpdate({ items: state.Platforms, item: action.entity });
    }
    return state;
}

export const removePlatformReducer = (state, action) => {
    if (action instanceof RemovePlatformAction)
        pluckOut({ items: state.Platforms, value: action.entity.id });
    return state;
}

export const allPlatformsReducer = (state, action) => {
    if (action instanceof AllPlatformsAction) {
        state.Platforms = action.entities;
    }
    return state;
}