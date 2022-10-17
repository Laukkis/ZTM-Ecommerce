import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectFavorites } from '../../store/favorites/favorites.selector'

import './favorites-preview.styles.scss'



const FavoritesPreview = () => {
    const favorites = useSelector(selectFavorites)
    const favorite = favorites.items[1]

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate('/favorites')

    return (
        <>
            <h2>My wish list</h2>
            <div className='favorites-item-container'>
                <div className='item-details' onClick={onNavigateHandler}>
                    {favorite ? (
                        <>
                            <div>
                                <p className='name'>{favorite.name}</p>
                            </div>
                            <a href='/favorites'> <span>See all</span></a>
                        </>
                    ) : (
                        <p>No favorites</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default FavoritesPreview;