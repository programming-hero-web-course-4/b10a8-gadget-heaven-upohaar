import React from 'react';
import bgImage from '../assets/banner.jpg'
const HomeBanner = () => {
    return (
        <div className='container  w-4/6 mx-auto z-10 mt-[-200px]'>
            <div className=' bg-white p-2 m-6 border rounded-xl ' >
                <div className=' m-2 rounded-xl ' >

                    <div
                        className=" rounded-xl"
                        style={{
                            height: '70vh',
                            backgroundImage: `url('${bgImage}')`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;