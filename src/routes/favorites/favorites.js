import { useSelector } from 'react-redux'
import { selectFavorites } from '../../store/favorites/favorites.selector'

import FavoritesCard from '../../components/favorites-card/favorites-card'

import './favorites.styles.scss'

const Favorites = () => {
    const favorites = useSelector(selectFavorites)

    return (
        <div>
            <h1>Your favorites</h1>
            <div className='favorites-container'>
                <FavoritesCard favorites={favorites} />
            </div>

        </div>
    )
}

export default Favorites;