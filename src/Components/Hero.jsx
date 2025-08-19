import React from 'react';
import bannerImg from '../assets/C002-assets/banner-img-1.png';

const Hero = () => {
    return (
        <div className='py-12'>
            <img src={bannerImg} alt=" Banner Image" className=' w-full mx-auto rounded-2xl'/>
            <div className='text-center absolute md:inset-50 lg:inset-80'>
              <h1 className='text-3xl text-white'>It avoids subjective claims or <br></br>exaggeration that might <br></br>raise red flags legally</h1>
              <p className='text-white'> Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.<br></br>Whether it's a routine checkup or urgent consultation, book appointments <br></br>in minutes and receive quality care you can trust.</p>
            </div>
        </div>
    );
};

export default Hero;