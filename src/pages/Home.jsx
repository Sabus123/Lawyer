import React from 'react';
import Hero from '../Components/Hero';
import LawyerContainer from '../Components/LawyerContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <Hero></Hero>
            <div className='text-center mt-5'>
                <h1 className='font-extrabold text-black text-4xl'>Our Best Lawyers</h1>
                <p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <LawyerContainer lawyer={data}></LawyerContainer>
        </div>
    );
};

export default Home;