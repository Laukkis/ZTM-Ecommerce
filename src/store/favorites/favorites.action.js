import { FAVORITES_ACTION_TYPES } from "./favorites.types";
import { createAction } from "../../utils/reducers/reducer.utils";

import { setFavoritesAndDocuments } from "../../utils/firebase/firebase.utils";

const addFavoritesItem = (name, imageUrl, price, id) => {
    setFavoritesAndDocuments(name, imageUrl, price, id)
}


export const setFavorites = (favoritesArray) => {
    return createAction(FAVORITES_ACTION_TYPES.SET_FAVORITES, favoritesArray);
}

export const resetFavorites = (favoritesArray) => {
    return createAction(FAVORITES_ACTION_TYPES.RESET_INITIAL_STATE, favoritesArray)
}

export const addToFavorites = (product) => {
    const newFavorites = addFavoritesItem(product)
    return createAction(FAVORITES_ACTION_TYPES.ADD_TO_FAVORITES, newFavorites)

}
