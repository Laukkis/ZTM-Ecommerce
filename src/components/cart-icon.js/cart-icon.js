import { useSelector, useDispatch } from 'react-redux'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action.js'

import './cart-icon.styles.scss'

const CartIcon = () => {

    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleCart = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <div className='cart-icon-container' onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;