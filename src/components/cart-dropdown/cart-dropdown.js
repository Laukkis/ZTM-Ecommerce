import { useContext } from 'react'

import Button from '../button/button'

import { CartContext } from '../../contexts/cart.context'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    /*  const { cartItems } = useContext(CartContext)
     const { name, id, price } = cartItems; */

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {/* {cartItems.map((cartItems) => (
                    <div key={id} cartItems={cartItems}>
                        <p>{name}</p>
                        <p>test</p>
                    </div>
                ))} */}
            </div>
            <Button>GO TO CHECKOUT</Button>

        </div>
    )
}

export default CartDropdown;