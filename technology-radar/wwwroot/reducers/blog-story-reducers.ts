import { AllBlogStorysAction } from "../actions";
import { AddOrUpdateBlogStoryAction } from "../actions";
import { RemoveBlogStoryAction } from "../actions";
import { pluckOut } from "../../libs";
import { addOrUpdate } from "../../libs";

export const addOrUpdateBlogStoryReducer = (state, action) => {
    if (action instanceof AddOrUpdateBlogStoryAction) {
        addOrUpdate({ items: state.blogStorys, item: action.entity });
    }
    return state;
}

export const removeBlogStoryReducer = (state, action) => {
    if (action instanceof RemoveBlogStoryAction) {
        state.lastTriggeredByAction = RemoveBlogStoryAction;
        pluckOut({ items: state.blogStorys, value: action.entity.id });
    }
    return state;
}

export const allBlogStorysReducer = (state, action) => {
    if (action instanceof AllBlogStorysAction) {
        state.blogStorys = action.entities;
    }
    return state;
}