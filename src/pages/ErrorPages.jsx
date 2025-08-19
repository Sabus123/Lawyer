import React from 'react';
import Navbar from '../Components/Navbar';
import { Link, useRouteError } from 'react-router';

const ErrorPages = () => {
    const error = useRouteError()

    return (
        <div>
           <Navbar></Navbar>
           <div className='py-24 text-center'>
            <h1 className='mb-8 text-7xl font-thin text-gray-900'>
            {
                error?.status || 404
            }
            </h1>
           <p className='mb-3 text-xl font-bold text-gray-900 md:text-2xl'>
            {
                error?.error?.message || 'Something Went Wrong'
            }
           </p>
           <Link to='/'>
           <button className="btn btn-outline btn-secondary">Go to Homepage</button>
           </Link>
        
           </div>
        </div>
    );
};

export default ErrorPages;