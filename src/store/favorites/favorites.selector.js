import { createSelector } from "reselect";

const selectFavoritesReducer = (state) => state.favorites;


export const selectFavorites = createSelector(
    [selectFavoritesReducer],
    (favoritesSlice) => favoritesSlice.favorites
)

export const selectFavoritesMap = createSelector(
    [selectFavorites],
    (categories) => categories.reduce((acc, favorites) => {
        const { name, items } = favorites;
        acc[name.toLowerCase()] = items;
        return acc;
    }, {})
)