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
        case FAVORITES_ACTION_TYPES.ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: payload
            }
        case FAVORITES_ACTION_TYPES.RESET_INITIAL_STATE:
            return {
                ...INITIAL_STATE
            }
        default:
            return state;
    }
}