import React, { useContext } from 'react';
import cardImage from '../../assets/cart.png'
import loveImage from '../../assets/love.png'
import { Link, NavLink } from 'react-router-dom';
import HomeBanner from '../../components/HomeBanner';
import { AuthContext } from '../../components/AuthProvider';
const HomeHeader = () => {
    const { products, wishList, cart, setWishList, setCart } = useContext(AuthContext)
    const listItem = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="statistics">Statistics</NavLink></li>
        <li><NavLink to="dashboard">Dashboard</NavLink></li>
        <li><NavLink to="login"> Login</NavLink></li>
    </>
    return (
        <div>
            <div className=' bg-white text-white p-2 m-6 border rounded-xl z-0 ' >
                <div className='bg-purple-700 m-2 rounded-xl p-5' >
                    <div className="navbar z-0">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul

                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 gap-4 shadow">
                                    {listItem}

                                </ul>
                            </div>
                            <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-4 gap-4 ">
                                {listItem}
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <div className='flex gap-6'>
                                <button> <div className="tooltip tooltip-open tooltip-primary" data-tip={wishList.length}></div><img className=' w-10 h-10 ' src={loveImage} alt="" /></button>
                                <button><div className="tooltip tooltip-open tooltip-primary" data-tip={cart.length}></div><img className=' w-10 h-10 ' src={cardImage} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="z-0 pt-20 pb-52 ">
                        <div className="hero-content text-white text-center">
                            <div className="md:w-3/5">
                                <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                                <p className="py-6">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                               <Link to='dashBoard'> <button className="btn btn-primary text-purple-800 hover:bg-white bg-white rounded-full">Shop Now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HomeBanner ></HomeBanner>
        </div>

    );
};

export default HomeHeader;    