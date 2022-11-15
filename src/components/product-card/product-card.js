import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { selectCartItems } from '../../store/cart/cart.selector'
import { selectFavorites } from '../../store/favorites/favorites.selector'

import { addItemToCart } from '../../store/cart/cart.action'
import { setFavorites } from '../../store/favorites/favorites.action'
import { selectCurrentUser } from '../../store/user/user.selector'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Button from '../button/button'

import { setFavoritesAndDocuments, getFavoritesAndDocuments } from '../../utils/firebase/firebase.utils'
import './product-card.styles.scss'

const ProductCard = ({ product }) => {

    const { name, price, imageUrl, id } = product;

    const cartItems = useSelector(selectCartItems);
    const favorites = useSelector(selectFavorites);
    const currentUser = useSelector(selectCurrentUser);
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    const addToFavorites = async () => {
        if (currentUser === null) {
            navigate('/auth')
        }
        await setFavoritesAndDocuments(name, imageUrl, price, id)
        const favoritesArray = await getFavoritesAndDocuments('favorites');
        dispatch(setFavorites(favoritesArray));
        console.log(favoritesArray)
    }

    const FavoritesButton = () => {
        if (favorites?.items?.some(e => e.id === id && currentUser)) {
            return <span className='favorite-icon'><FontAwesomeIcon icon={faHeart} /></span>
        }

        return <span className='favorite-icon'><FontAwesomeIcon icon={farHeart} /></span>

    }

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType={'inverted'} onClick={addProductToCart}>Add to cart</Button>
            <div className='favorite-button' onClick={addToFavorites}>
                <FavoritesButton />

            </div>
        </div>
    )
}

export default ProductCard;