import {createContext, useState} from 'react';

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd

    // if found increment quantity

    // return new array with modyfied cartItems new caret items
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItem, setCartItem] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItem(addCartItem);
    }
    const value = {
        isCartOpen,
        setIsCartOpen
    };

    return <CartContext.Provider value={value}>
            {children}
           </CartContext.Provider>;
};
