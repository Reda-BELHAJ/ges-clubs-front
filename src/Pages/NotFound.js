import React from 'react';
import { Link } from 'react-router-dom'

import Navbar from '../Components/Navbar'
// import NavbarAuth from '../Components/NavbarAuth'

const NotFound = () => {
    const connected = false; // true connected false not connected
    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            {
                connected ? null: <Navbar />
            }
            
            <main>
                <div className="w-full max-w-6xl mx-auto sm:px-6">
                    <div className="w-full m-auto py-16 min-h-screen flex items-center justify-center">
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                            <div className="border-t border-gray-200 text-center pt-8">
                                <h1 className="text-9xl font-bold text-blue-300 ">404</h1>
                                <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
                                <p className="text-2xl pb-8 px-12 font-medium">
                                    Oops! The page you are looking for does not exist. It might have been moved or deleted.
                                </p>
                                <Link to="/">
                                    <a className="bg-gradient-to-r from-cyan-300 to-blue-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                                        HOME
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NotFound;
