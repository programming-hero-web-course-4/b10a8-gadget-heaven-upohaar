import React, { useContext } from 'react';
import successfullImg from '../assets/Group.png'
import { AuthContext } from './AuthProvider';
const Modal = ({purchaseHandle}) => {
    const {cart}=useContext(AuthContext)
    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

    return (
        <div>
           
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box flex flex-col justify-center items-center">
                    <img className='w-14 h-14' src= {successfullImg} alt="" />
                    <h3 className="font-bold text-lg">Payment Successfully!</h3>
                    <p className="py-4">Thanks for purchasing.</p>
                    <p>Total Price: {totalPrice}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={purchaseHandle} className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;