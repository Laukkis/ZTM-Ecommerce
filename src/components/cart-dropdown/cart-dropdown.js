import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';


import Button from '../button/button'
import CartItem from '../cart-item/cart-item'

import { CartContext } from '../../contexts/cart.context'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}

            </div>
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>

        </div>
    )
}

export default CartDropdown;