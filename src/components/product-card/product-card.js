import { useDispatch, useSelector } from 'react-redux'
import './product-card.styles.scss'

import { selectCartItems } from '../../store/cart/cart.selector'
import { selectFavorites } from '../../store/favorites/favorites.selector'
import { addItemToCart } from '../../store/cart/cart.action'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Button from '../button/button'

import { setFavoritesAndDocuments } from '../../utils/firebase/firebase.utils'

const ProductCard = ({ product }) => {

    const { name, price, imageUrl, id } = product;
    const isFavorite = false;


    const cartItems = useSelector(selectCartItems)
    const favorites = useSelector(selectFavorites)


    const dispatch = useDispatch();
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    const addToFavorites = () => {
        setFavoritesAndDocuments(name, imageUrl, price, id)
    }

    /*    const FavoriteIcon = () => {
           if (favorites.items.find(e => e.name === 'Brown Cowboy')) {
               return <span className='favorite-icon'><FontAwesomeIcon icon={faHeart} /></span>
           } else {
               return <span className='favorite-icon'><FontAwesomeIcon icon={farHeart} /></span>
           }
       } */

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType={'inverted'} onClick={addProductToCart}>Add to card</Button>
            <div className='favorite-button' onClick={addToFavorites}>

                {favorites.items &&
                    <span className='favorite-icon'><FontAwesomeIcon icon={faHeart} /></span>
                }
                {!favorites.items &&
                    <span className='favorite-icon'><FontAwesomeIcon icon={farHeart} /></span>
                }





            </div>
        </div>
    )
}

export default ProductCard;