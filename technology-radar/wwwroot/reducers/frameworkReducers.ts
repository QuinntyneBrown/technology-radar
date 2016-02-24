import { AllFrameworksAction } from "../actions";
import { AddOrUpdateFrameworkAction } from "../actions";
import { RemoveFrameworkAction } from "../actions";
import { pluckOut } from "../../libs";
import { addOrUpdate } from "../../libs";

export const addOrUpdateFrameworkReducer = (state, action) => {
    if (action instanceof AddOrUpdateFrameworkAction) {
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