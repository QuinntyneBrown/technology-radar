import { AllTechniquesAction } from "../actions";
import { AddTechniqueAction } from "../actions";
import { RemoveTechniqueAction } from "../actions";
import { pluckOut } from "../../libs";
import { addOrUpdate } from "../../libs";

export const addTechniqueReducer = (state, action) => {
    if (action instanceof AddTechniqueAction) {
        addOrUpdate({ items: state.Techniques, item: action.entity });
    }
    return state;
}

export const removeTechniqueReducer = (state, action) => {
    if (action instanceof RemoveTechniqueAction)
        pluckOut({ items: state.Techniques, value: action.entity.id });
    return state;
}

export const allTechniquesReducer = (state, action) => {
    if (action instanceof AllTechniquesAction) {
        state.Techniques = action.entities;
    }
    return state;
}