import { SearchQueryAction } from "../actions";

export const queryReducer = (state, action) => {
    if (action instanceof SearchQueryAction) {
        state.searchResults = action.results.results;
        state.searchTerm = action.term;
        state.lastTriggeredByAction = SearchQueryAction;
    }
    return state;
}


