import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    addToCartIcon: () => { },
    cartIconQuantity: 0
})


const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    // if found, increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    //return new array with modfied cartItems / new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}




export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartIconQuantity, setCartIconQuantity] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
        setCartIconQuantity(cartIconQuantity + 1)
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartIconQuantity, setCartIconQuantity, addCartItem }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}