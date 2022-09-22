import { useContext, useEffect } from 'react';

import { ProductsContext } from '../../contexts/products.context';
import { CartContext } from '../../contexts/cart.context';

import ProductCard from '../../components/product-card/product-card';

import './shop.styles.scss'

const Shop = () => {

    const { products } = useContext(ProductsContext)
    const { cartItems } = useContext(CartContext)

    return (
        <div className='products-container'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )

}

export default Shop;
