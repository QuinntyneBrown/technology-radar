import { AllFrameworksAction } from "../actions";
import { AddFrameworkAction } from "../actions";
import { RemoveFrameworkAction } from "../actions";
import { pluckOut } from "../../libs";
import { addOrUpdate } from "../../libs";

export const addFrameworkReducer = (state, action) => {
    if (action instanceof AddFrameworkAction) {
        addOrUpdate({ items: state.frameworks, item: action.entity });
    }
    return state;
}

export const removeFrameworkReducer = (state, action) => {
    if (action instanceof RemoveFrameworkAction)
        pluckOut({ items: state.frameworks, value: action.entity.id });
    return state;
}

export const allFrameworksReducer = (state, action) => {
    if (action instanceof AllFrameworksAction) {
        state.frameworks = action.entities;
    }
    return state;
}