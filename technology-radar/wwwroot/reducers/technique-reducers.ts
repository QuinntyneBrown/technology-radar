import { AllTechniquesAction } from "../actions";
import { AddOrUpdateTechniqueAction } from "../actions";
import { RemoveTechniqueAction } from "../actions";
import { pluckOut } from "../../libs";
import { addOrUpdate } from "../../libs";

export const addOrUpdateTechniqueReducer = (state, action) => {
    if (action instanceof AddOrUpdateTechniqueAction) {
        state.lastTriggeredByAction = AddOrUpdateTechniqueAction;
        addOrUpdate({ items: state.techniques, item: action.entity });
    }
    return state;
}

export const removeTechniqueReducer = (state, action) => {
    if (action instanceof RemoveTechniqueAction) {
        state.lastTriggeredByAction = RemoveTechniqueAction;
        pluckOut({ items: state.techniques, value: action.entity.id });
    }    
    return state;
}

export const allTechniquesReducer = (state, action) => {
    if (action instanceof AllTechniquesAction) {
        state.techniques = action.entities;
    }
    return state;
}