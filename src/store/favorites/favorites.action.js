import { FAVORITES_ACTION_TYPES } from "./favorites.types";
import { createAction } from "../../utils/reducers/reducer.utils";

export const setFavorites = (favoritesArray) => {
    return createAction(FAVORITES_ACTION_TYPES.SET_FAVORITES, favoritesArray);
}
