import { useContext } from 'react'

import Button from '../button/button'
import CartItem from '../cart-item/cart-item'

import { CartContext } from '../../contexts/cart.context'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    //const { name, id, price } = item;

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}

            </div>
            <Button>CHECKOUT</Button>

        </div>
    )
}

export default CartDropdown;