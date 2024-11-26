import React, { useContext } from 'react';
import ServiceBanner from '../components/ServiceBanner';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider';
import loveImg from '../assets/love.png'
import Rating from '@mui/material/Rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ServiceDetails = () => {
    const { id } = useParams()
    const { products, wishList, cart, setWishList, setCart } = useContext(AuthContext)
    const singleProduct = products.find(product => product.product_id == id)
    const { rating, availability, specification, description, category, price, product_image, product_title, product_id } = singleProduct
    const addToCartHandle = (value) => {
        if (cart.includes(value)) {
            return toast("Already add");
        }
        else {
            toast("product successfully added");

            setCart([...cart, value])
        }

    }
    const addToWishHandle = (wish) => {
        if (wishList.includes(wish)) {
            return toast("Already add");
        }
        else {
            toast("product successfully added");
            setWishList([...wishList, wish])
        }
    }
    return (
        <div>
            <ServiceBanner></ServiceBanner>
            <div>
                <ToastContainer />
                <div className='container  w-4/6 mx-auto z-10 mt-[-200px]'>
                    <div className=' bg-white p-2 m-6 border rounded-xl ' >
                        <div className=' m-2 rounded-xl ' >
                            <div className='  bg-white   rounded-3xl bottom-container  z-40  bottom-banner-section'>
                                <div className=" grid grid-cols-5 gap-10 p-10 content-center items-center  " >

                                    <div className="col-span-2">
                                        <div className="card bg-base-100  shadow-xl">
                                            <figure className="p-4">
                                                <img
                                                    src={product_image}
                                                    alt={product_title}
                                                    className="rounded-xl" />
                                            </figure>
                                        </div>
                                    </div>

                                    {/* second cold  */}
                                    <div className=" col-span-3 flex flex-col  gap-4">
                                        <h className="text-xl font-bold ">{product_title}</h>
                                        <p> Price:{price}</p>
                                        <div> <button className=' border px-4 py-1 rounded-full border-purple-200 bg-green-100  btn-outline'>In Stock</button></div>
                                        <p>{description}</p>
                                        <p className='font-bold'>Specification: {specification} </p>
                                        <p>category: {category}</p>
                                        <div className='flex flex-col gap-1 pt-2'>

                                        </div>

                                        <h2 className='font-bold '>Rating </h2>
                                        <p className='flex gap-4 mb-3  content-center items-center'>
                                            <span className=' font-semibold rounded-3xl  btn-outline bg-slate-200 px-4 py-1 '>{rating} </span></p>
                                        <Rating name="read-only" value={rating} readOnly />
                                        <div className='flex  gap-6 '>
                                            <button onClick={() => addToCartHandle(singleProduct)} className=' border py-2 px-4 bg-purple-700 text-white rounded-full '  > <span className='flex  justify-center items-center gap-2'>Add to Card </span>

                                            </button>

                                            <button onClick={() => addToWishHandle(singleProduct)}  >  <img className='w-10 h-10' src={loveImg} alt="" /> </button>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

};

export default ServiceDetails;