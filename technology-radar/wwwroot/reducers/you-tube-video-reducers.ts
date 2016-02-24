import { AllYouTubeVideosAction } from "../actions";
import { AddOrUpdateYouTubeVideoAction } from "../actions";
import { RemoveYouTubeVideoAction } from "../actions";
import { pluckOut } from "../../libs";
import { addOrUpdate } from "../../libs";

export const addOrUpdateYouTubeVideoReducer = (state, action) => {
    if (action instanceof AddOrUpdateYouTubeVideoAction) {
        addOrUpdate({ items: state.youTubeVideos, item: action.entity });
    }
    return state;
}

export const removeYouTubeVideoReducer = (state, action) => {
    if (action instanceof RemoveYouTubeVideoAction)
        pluckOut({ items: state.youTubeVideos, value: action.entity.id });
    return state;
}

export const allYouTubeVideosReducer = (state, action) => {
    if (action instanceof AllYouTubeVideosAction) {
        state.youTubeVideos = action.entities;
    }
    return state;
}