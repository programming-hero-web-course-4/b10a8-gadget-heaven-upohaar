import React, { useContext } from 'react';
import cardImage from '../../assets/cart.png'
import loveImage from '../../assets/love.png'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../components/AuthProvider';

const Header = () => {
  const { products, wishList, cart, setWishList, setCart } = useContext(AuthContext)
  const listItem = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="statistics">Statistics</NavLink></li>
    <li><NavLink to="dashboard">Dashboard</NavLink></li>
    <li><NavLink to="login"> Login</NavLink></li>
  </>
  return (
    <div>
      <div className="navbar bg-base-100">
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
    </div>
  );
};

export default Header;