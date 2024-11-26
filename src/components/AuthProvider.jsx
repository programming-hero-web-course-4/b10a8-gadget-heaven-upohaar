import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [products, setProduct] = useState([])
    const [wishList , setWishList]=useState([])
    const [cart, setCart]= useState([])
    useEffect(()=>{
        fetch('/products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))       
    },[])
    
    const info = {products,wishList, cart,setWishList,setCart }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;