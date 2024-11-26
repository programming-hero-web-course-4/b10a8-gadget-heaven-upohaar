import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    console.log(service)
    const {price,product_image,product_title,product_id}= service 
    return (
        <div>
            <div className="card bg-base-100  shadow-xl ">
                <figure className="px-10 pt-10">
                    <img
                        src={product_image}
                        alt="Shoes"
                        className="rounded-xl h-60" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <div>
                        <h3>Price: {price}$</h3>
                    </div>
                    <div className="card-actions">
                    <Link to={`service-details/${product_id}`}><button className="btn btn-outline px-10 border-purple-800  hover:bg-[#9538E2] hover:text-white hover:border-none  border-b-2  rounded-full">View Details</button> </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;