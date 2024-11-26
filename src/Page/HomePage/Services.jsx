import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../components/AuthProvider';
import Service from '../../components/Service';
import FourOfour from '../../components/FourOfour';

const Services = () => {

    const [showProduct, setShowProduct]=useState([]);
    // const {  } = useContext(AuthContext)
    const [services, setServices] = useState([])
   
    useEffect(()=>{
        fetch('/products.json')
        .then(res=>res.json())
        .then(data=>{
            setServices(data);
            setShowProduct(data)
        })
        
    },[])
    const categoryItem = []
    services.forEach(service => {
        if (!categoryItem.includes(service.category)) {
            categoryItem.push(service.category)
        }
    })
    
    const showAllProduct =()=>{
        setShowProduct(services)
    }
    const notAvailableDataHandel =()=>{
        setShowProduct([])
        
    }
    const filterProducts = (value)=>{

        const filterData=services.filter(product => product.category === value);
        setShowProduct(filterData)
        console.log(filterData)

    }

   
    return (
        <div className='container mx-auto'>
            <h2 className='text-center font-bold text-3xl py-8 '>Explore Cutting-Edge Gadgets</h2>
            <div className='grid grid-cols-4 gap-10 px-6'>
                <div className='col-span-1'>
                    <div className="card bg-base-100  shadow-xl">

                        <div className="card-body  flex flex-col gap-4 items-center ">
                            <button onClick={showAllProduct} className='btn w-full flex text-white bg-purple-700'>All Product</button>
                            {categoryItem.map(category => <button onClick={() => filterProducts(category)} className='btn w-full flex bg-slate-200'>{category}</button>)}
                            <button onClick={notAvailableDataHandel} className='btn w-full flex bg-slate-200'>Apple Accessories</button>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-6 col-span-3 '>
                    {(showProduct.length == 0 )? <FourOfour title='NO result found'> </FourOfour>
                    : 
                    showProduct.map(service => <Service service={service} key={service.product_id} > </Service>) }
                   
                </div>
            </div>
        </div>
    );
};

export default Services;