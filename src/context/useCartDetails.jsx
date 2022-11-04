import { useReducer } from "react";
import { createContext, useState } from "react";


export const useCartDetails = createContext();


export default (props) => {


    const [cartProduct, setCartProduct] = useState([])

    const addCartProduct = (product) => {
        if (cartProduct.length === 0) {
            return setCartProduct([...cartProduct, product])
        };
        setCartProduct(
            cartProduct.map((item) => {
                if (item.id === product.id) {
                    return { ...item, quantity: product.quantity }
                } else {
                    return item;
                }
            })
        );
    }

    const deleteCartProduct = (id) => { 
        setCartProduct(cartProduct.filter(item => item.id !== id))
    }


    const countTotalCart = cartProduct.reduce((acc, current) => current.quantity + acc, 0)




    return (
        <useCartDetails.Provider value={{ cartProduct, addCartProduct, deleteCartProduct, countTotalCart}}>
            {props.children}
        </useCartDetails.Provider>
    )

    
}