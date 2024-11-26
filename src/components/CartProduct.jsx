import React, { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from './AuthProvider';
const CartProduct = ({type,product}) => {
    const { products, wishList, cart, setWishList, setCart } = useContext(AuthContext)
    
    const wishListToAddToCart = (value )=>{
        let addProduct = [...cart]
        if (addProduct.includes(value)){
            return toast(<p className='alert alert-error'>Product already exist </p>);
        }
        addProduct.push(value);
        setCart(addProduct); 
        let addProduct2 = [...wishList].filter(product => product.product_id !== value.product_id)     
        setTimeout(()=>{
            setWishList(addProduct2);

        },[2000])
        toast(<p className='alert alert-info'>Product is successfully add </p>);

    }
    
    return (
        <div>
            <div>

                <div className=" bg-white  shadow-2xl   rounded-xl  ">
                    <div className="grid md:grid-cols-4 p-6">
                        <div className='col-span-1 flex  justify-center items-center content-center'> <img
                            src={product_image}
                            className="  rounded-lg  w-48" />
                        </div>
                        <div className='col-span-3 flex justify-between content-center items-center gap-3 '>
                            <div className='flex  flex-col gap-4'>
                                <h1 className="text-2xl font-bold">{product_title}</h1>
                                <p className="">{description}  </p>
                                <p className=" font-semibold"> Price : $ {price}  </p>
                                {(type == "wishlist") ? <div>
                                    <button onClick={() => wishListToAddToCart(product)} className=' border py-2 px-4 bg-purple-700 text-white rounded-full '  > <span className='flex  justify-center items-center gap-2'>Add to Card <IoCartOutline /></span>

                                    </button>
                                </div> : ""}

                            </div>

                            <div><button onClick={() => deleteProduct(product.product_id)} className="btn btn-outline hover:bg-red-500 border-red-500 hover:border-red-500"><img className='w-8 h-8' src={deleteImg} alt="" /></button></div>
                        </div>
                    </div>
                </div>
                <ToastContainer></ToastContainer>

            </div>

        </div>
    );
};

export default CartProduct;