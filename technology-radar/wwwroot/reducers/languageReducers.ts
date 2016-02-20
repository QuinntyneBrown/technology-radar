import { AllLanguagesAction } from "../actions";
import { AddLanguageAction } from "../actions";
import { RemoveLanguageAction } from "../actions";
import { pluckOut } from "../../libs";
import { addOrUpdate } from "../../libs";

export const addLanguageReducer = (state, action) => {
    if (action instanceof AddLanguageAction) {
        addOrUpdate({ items: state.languages, item: action.entity });
    }
    return state;
}

export const removeLanguageReducer = (state, action) => {
    if (action instanceof RemoveLanguageAction)
        pluckOut({ items: state.languages, value: action.entity.id });
    return state;
}

export const allLanguagesReducer = (state, action) => {
    if (action instanceof AllLanguagesAction) {
        state.languages = action.entities;
    }
    return state;
}