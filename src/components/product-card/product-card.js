import { useDispatch, useSelector } from 'react-redux'
import './product-card.styles.scss'

import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart } from '../../store/cart/cart.action'

import Button from '../button/button'

const ProductCard = ({ product }) => {

    const { name, price, imageUrl } = product;

    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType={'inverted'} onClick={addProductToCart}>Add to card</Button>
        </div>
    )
}

export default ProductCard;