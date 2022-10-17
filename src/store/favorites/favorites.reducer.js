import { FAVORITES_ACTION_TYPES } from "./favorites.types";


const INITIAL_STATE = {
    favorites: []
}

export const favoritesReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case FAVORITES_ACTION_TYPES.SET_FAVORITES:
            return {
                ...state,
                favorites: payload
            }
        default:
            return state;
    }
}