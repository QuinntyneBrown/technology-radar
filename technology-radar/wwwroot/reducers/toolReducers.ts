import { AllToolsAction } from "../actions";
import { AddToolAction } from "../actions";
import { RemoveToolAction } from "../actions";
import { pluckOut } from "../../libs";
import { addOrUpdate } from "../../libs";

export const addToolReducer = (state, action) => {
    if (action instanceof AddToolAction) {
        addOrUpdate({ items: state.tools, item: action.entity });
    }
    return state;
}

export const removeToolReducer = (state, action) => {
    if (action instanceof RemoveToolAction)
        pluckOut({ items: state.tools, value: action.entity.id });
    return state;
}

export const allToolsReducer = (state, action) => {
    if (action instanceof AllToolsAction) {
        state.tools = action.entities;
    }
    return state;
}