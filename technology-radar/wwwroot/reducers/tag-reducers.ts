import { AllTagsAction } from "../actions";
import { AddOrUpdateTagAction } from "../actions";
import { RemoveTagAction } from "../actions";
import { pluckOut } from "../../libs";
import { addOrUpdate } from "../../libs";

export const addOrUpdateTagReducer = (state, action) => {
    if (action instanceof AddOrUpdateTagAction) {
        state.lastTriggeredByAction = AddOrUpdateTagAction;
        addOrUpdate({ items: state.tags, item: action.entity });
    }
    return state;
}

export const removeTagReducer = (state, action) => {
    if (action instanceof RemoveTagAction) {
        state.lastTriggeredByAction = RemoveTagAction;
        pluckOut({ items: state.tags, value: action.entity.id });
    }
    return state;
}

export const allTagsReducer = (state, action) => {

    if (action instanceof AllTagsAction) {
        state.tags = action.entities;
    }
    return state;
}