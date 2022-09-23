import { useContext } from 'react'

import './product-card.styles.scss'

import { CartContext } from '../../contexts/cart.context'
import Button from '../button/button'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)


    /*   const AddToCart = () => {
          cartItems.push(product)
          console.log(cartItems);
      } */



    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
                <Button buttonType={'inverted'} onClick={addProductToCart}>Add to card</Button>
            </div>
        </div>
    )
}

export default ProductCard;