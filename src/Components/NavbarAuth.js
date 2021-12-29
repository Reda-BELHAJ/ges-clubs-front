import { any } from 'prop-types';
import React, {useState, useEffect} from 'react'
import { MdMargin } from 'react-icons/md';
import { Link } from 'react-router-dom'
import UserService from '../Services/User/UserService';
import EventBus from '../Utils/EventBus';



const NavbarAuth = () => {
    const user = UserService.getCurrentUser();
    const [top, setTop] = useState(true);

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]); 

    const onLogoutOut = () => {
        EventBus.dispatch("logout", any);
    }

    return (
        <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && `bg-white backdrop-blur-sm shadow-lg`}`}>
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    
                    <div className="flex-shrink-0 mr-4">
                        <Link to="/home" className="block" aria-label="Cruip">
                        <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                            <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                                <stop stopColor="#4FD1C5" offset="0%" />
                                <stop stopColor="#81E6D9" offset="25.871%" />
                                <stop stopColor="#338CF5" offset="100%" />
                            </radialGradient>
                            </defs>
                            <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
                        </svg>
                        </Link>
                    </div>

                    <div >
                        <Link to="/" >
                            <button style={{margin: 300, borderWidth: 5}} onClick={onLogoutOut}>Log out</button>
                        </Link>
                    </div>

                    <nav className="flex flex-grow">
                        <div className="flex flex-grow justify-end flex-wrap items-center"> 
                            <div className="bg-gray-200 flex justify-center items-center relative rounded-full">
                                {/* <svg class="w-4 h-4 m-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg> */}
                                
                                <Link  to="/profile">
                                    <img 
                                        width={32}
                                        height={32}
                                        className="rounded-full" 
                                        alt="A" 
                                        src="https://w1.pngwing.com/pngs/40/861/png-transparent-circle-silhouette-user-user-interface-avatar-menu-bar-css-sprites-data-personalization-thumbnail.png"
                                    />
                                </Link>

                                <span className="w-2 h-2 bg-green-500 absolute bottom-0 right-0 rounded-full"></span>
                                {/* 
                                    Sleep : Li hya yellow
                                    <span class="w-2 h-2 bg-yellow-500 absolute bottom-0 right-0 rounded-full"></span>
                                    Away : Li hya red
                                    <span class="w-2 h-2 bg-red-500 absolute bottom-0 right-0 rounded-full"></span> 
                                */}
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </header>
    )
}    

export default NavbarAuth