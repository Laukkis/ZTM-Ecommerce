import { useDispatch, useSelector } from 'react-redux'

import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

import './checkout-item.styles.scss'


const CheckoutItem = ({ cartItem }) => {
    const cartItems = useSelector(selectCartItems)
    const { name, imageUrl, price, quantity } = cartItem;

    const dispatch = useDispatch();

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHanler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHanler = () => dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'> {name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHanler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div onClick={addItemHanler} className='arrow'>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;