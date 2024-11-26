import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import CartProduct from './CartProduct';
import FourOfour from './FourOfour';
const DashBoardBanner = () => {
    const { products, wishList, cart, setWishList, setCart } = useContext(AuthContext)
    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
    const [active, setActive] = useState(false)
    const activeHandle = (value) => {
        setActive(value)

    }
    return (
        <div>

            <div className="hero py-10 text-white bg-purple-700 ">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">Dashboard</h1>
                        <p className="py-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <div className='flex text-center justify-center items-center gap-4'>
                            <button onClick={() => activeHandle(false)} className={`btn rounded-full px-8 ${active == true ? 'btn-outline border-white text-white rounded-full' : ''}`}>Cart</button>
                            <button onClick={() => activeHandle(true)} className={`btn rounded-full  px-4 ${active == false ? 'btn-outline border-white text-white rounded-full' : ''}`}>WishList</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col py-8 container mx-auto px-5'>
                {active == false ? <div className='flex justify-between'>
                    <div>
                        <h2 className='font-bold text-xl'>Cart : {cart.length} </h2>
                    </div>
                    <div className='flex gap-4'>
                        <h2 className='font-bold text-xl'>Total Cost: {totalPrice}$</h2>
                        <button className='font-bold text-xl'>Sort by Price</button>
                        <button className='font-bold text-xl'>Purchase</button>
                    </div>
                </div>
                    :
                    <div className='flex justify-between'>
                        <h2 className='font-bold text-xl'>WishList : {wishList.length}</h2>
                        <button className='font-bold text-xl'>Sort by Price</button>
                    </div>
                }


            </div>
            <div className='flex flex-col gap-8 pb-20'>


                {
                    active ? cart.map(product => <CartProduct type="cart" product={product} key={product.product_id}></CartProduct>)
                        :
                        wishList.map(product => <CartProduct type="wishlist" product={product} key={product.product_id}></CartProduct>)


                }
                {
                    ((cart.length == 0 && active == false) ? <FourOfour title="Product not selected"></FourOfour> :
                        (wishList.length == 0 && !active == false) ? <FourOfour title="Product not selected"></FourOfour> : "")
                }



            </div>
        </div>
    );
};

export default DashBoardBanner;