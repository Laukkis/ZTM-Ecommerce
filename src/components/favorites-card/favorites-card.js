import { removeFavoritesObject } from "../../utils/firebase/firebase.utils"

import './favorites-card.styles.scss'


const FavoritesCard = ({ favorites }) => {

    const removeHandler = () => {
        const favoritesObject = favorites.items
        const itemToRemove = Object.keys(favoritesObject)


        removeFavoritesObject(itemToRemove)
        console.log(itemToRemove)
        console.log("removeHandler done")

    }
    return (
        <div className="card-container">
            {favorites.items.map((items) => (
                <div className='item-details' key={items.id}>
                    <img src={items.imageUrl} alt={`${items.name}`} />
                    <h4 className='name'>{items.name}</h4>
                    <span className='remove-favorite-button' onClick={removeHandler}>Remove from favorites</span>
                </div>
            ))}
        </div>
    )
}

export default FavoritesCard;