import { AllArticlesAction } from "../actions";
import { AddOrUpdateArticleAction } from "../actions";
import { RemoveArticleAction } from "../actions";
import { pluckOut } from "../../libs";
import { addOrUpdate } from "../../libs";

export const addOrUpdateArticleReducer = (state, action) => {
    if (action instanceof AddOrUpdateArticleAction) {
        addOrUpdate({ items: state.articles, item: action.entity });
    }
    return state;
}

export const removeArticleReducer = (state, action) => {
    if (action instanceof RemoveArticleAction)
        pluckOut({ items: state.articles, value: action.entity.id });
    return state;
}

export const allArticlesReducer = (state, action) => {
    if (action instanceof AllArticlesAction) {
        state.articles = action.entities;
    }
    return state;
}